import type { ReactVMErrorMessage } from "./error";

// report any error to parent frame
if (window.parent) {
  window.addEventListener("error", (event) => {
    window.parent.postMessage(
      {
        type: "error",
        ...({
          message: event.message,
          error: event.error,
        } satisfies ReactVMErrorMessage),
      },
      "*"
    );
  });
}

const cache = {
  headChildren: [] as Element[],
  bodyInnerHTML: "",
};

document.onreadystatechange = () => {
  const edit = new URLSearchParams(location.search).get("edit");
  if (edit) {
    console.log("Applying edit", edit);
    const babelScript = document.querySelector("script[type='text/babel']");
    if (!babelScript) throw new Error("No babel script found");
    babelScript.textContent = decodeURIComponent(edit);
    const mutableUrl = new URL(location.href);
    // remove the edit query param
    mutableUrl.search = "";
    history.replaceState({}, document.title, mutableUrl);
  }

  cache.headChildren = Array.from(document.head.children);
  cache.bodyInnerHTML = document.body.innerHTML;

  if (document.readyState === "complete") {
    safeAppendRootContent(
      `
╔══════════╗
║ React VM ║
╚══════════╝
        `.trim()
    );
    safeAppendRootContent("Scanning dependencies...");

    // setup import map
    const packageJson = JSON.parse(document.querySelector("#dependencies")?.textContent ?? "{}");
    const packageImportEntries = Object.entries(packageJson).map(([name, version]) => [name, `https://esm.sh/${name}@${version}`]);

    const babelText = document.querySelector("script[type='text/babel']")?.textContent ?? "";
    const importFromPattern = /^\s*import(?:.|\n)*?(?:from)?\s+['"](.+)['"]/gm;
    const allImportMatches = [...babelText.matchAll(importFromPattern)];
    const allImportNames = allImportMatches.map((m) => m[1]);

    // @scope/package-name -> [@scope/package-name]
    // package-name/subpath -> [base-package-name, /subpath]
    // package-name -> [package-name]
    const normalizedPackageNamePattern = /^(@[^/]+\/[^/]+|[^/]+)/;
    const normalizedImportEntries = allImportNames.map((name) => {
      const match = name.match(normalizedPackageNamePattern);
      if (!match) throw new Error(`Invalid package name: ${name}`);
      const packageName = match[1];
      const packageSuffix = name.slice(packageName.length);
      const lockedVersion = packageJson[packageName] ? `@${packageJson[packageName]}` : "";
      return [name, `https://esm.sh/${packageName}${lockedVersion}${packageSuffix}`];
    });

    const imports = {
      ...Object.fromEntries(normalizedImportEntries),
      ...Object.fromEntries(packageImportEntries),
    };

    console.log(`[imports]`, imports);
    Object.entries(imports).forEach((entry) => {
      safeAppendRootContent(`Install ${entry[1]}`);
    });
    const importMapsScript = document.createElement("script");
    importMapsScript.type = "importmap";
    importMapsScript.textContent = JSON.stringify({ imports: imports }, null, 2);
    document.head.appendChild(importMapsScript);

    // transpile and run
    import("https://esm.sh/esbuild-wasm@0.23.1").then(async (esbuild) => {
      performance.mark("esbuild-wasm:imported");
      await esbuild.initialize({
        wasmURL: "https://esm.sh/esbuild-wasm@0.23.1/esbuild.wasm",
      });

      safeAppendRootContent("Compiling...");
      // build file content map
      const sourceScripts = document.querySelectorAll(`script[type="text/babel"]`);
      sourceScripts.forEach(async (sourceScript, index) => {
        const result = await esbuild.transform(sourceScript.textContent ?? "", { loader: "tsx" });
        const transpiledScript = document.createElement("script");
        transpiledScript.textContent = result.code;
        transpiledScript.type = "module";
        sourceScript.insertAdjacentElement("afterend", transpiledScript);
        safeAppendRootContent(`Rendering... ${index + 1} of ${sourceScripts.length}`);
      });
    });
  }
};

function safeAppendRootContent(content: string) {
  const root = document.getElementById("root");
  if (root) {
    let pre = root.querySelector("pre");
    if (!pre) {
      pre = document.createElement("pre");
      root.appendChild(pre);
    }
    pre.innerHTML = `${pre.innerHTML}${content}<br/>`;
  }
}
