// report any error to parent frame
if (window.parent) {
  window.addEventListener("error", (event) => {
    window.parent.postMessage(
      {
        type: "error",
        message: event.message,
        error: event.error,
        stack: event.error.stack,
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

document.addEventListener("keydown", (e) => {
  // handle shift + :
  if (e.shiftKey && e.key === ":") {
    if ((e.target as HTMLElement)?.closest("input,textarea")) return;
    e.preventDefault();
    const modal = document.createElement("dialog");
    modal.innerHTML = `
          <form>
            <label for="cmd"><code>Command</code></label>
            <br/>
            <input id="cmd" type="text" />
            <pre>[w]rite (filename)<br/>[e]dit [prompt]<br/>[o]pen</pre>
            <pre id="output"></pre>
            <button>Summit</button>
          </form>
        `;

    const form = modal.querySelector("form");
    if (!form) throw new Error("No form found");
    const cmdInput = form.querySelector("input");
    if (!cmdInput) throw new Error("No input found");
    const output = modal.querySelector("#output");
    if (!output) throw new Error("No output found");

    form.onsubmit = async (e) => {
      e.preventDefault();
      const input = cmdInput.value.trim() ?? "";

      if (input === "w" || input.startsWith("w ")) {
        const optionalFilename = input.slice(2).trim();
        const downloadFilename = optionalFilename ? `${optionalFilename}.html` : `artifact-${new Date().toISOString()}.html`;

        [...document.head.children].forEach((child) => cache.headChildren.includes(child) || child.remove());
        document.body.innerHTML = cache.bodyInnerHTML;

        const thisHtmlFileContent = new Blob([document.documentElement.outerHTML], { type: "text/html" });
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(thisHtmlFileContent);
        downloadLink.download = downloadFilename;
        downloadLink.click();
        location.reload();
      } else if (input === "o") {
        // TODO open file picker to load file
      } else if (input.startsWith("e ")) {
        output.textContent += "Authenticating...\n";
        const [aid, openai] = await Promise.all([import("https://esm.sh/@azure/identity?bundle-deps"), import("https://esm.sh/openai?bundle-deps")]);
        output.textContent += "Generating...\n";

        const credential = new aid.InteractiveBrowserCredential({
          tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
          clientId: "6e4c509e-2b65-40dc-b461-beb2c824f63a",
        });
        const azureADTokenProvider = aid.getBearerTokenProvider(credential, []);
        const client = new openai.AzureOpenAI({ azureADTokenProvider, apiVersion: "2024-07-01-preview", endpoint: "https://proto-api.azure-api.net/" });

        const babelScript = document.querySelector("script[type='text/babel']");
        if (!babelScript) throw new Error("No babel script found");
        const currentScriptContent = babelScript.textContent ?? ""; // TODO clean up indentation

        const messages = [
          {
            role: "system" as const,
            content: `Edit the following React program based on user's goal or instruction.

<script type="text/jsx">                  
${currentScriptContent.trim()}
<script>

Think before you respond. Use this format:
<thoughts>reason about the task...</thoughts>
<script type="text/jsx">
Your implementation here...
</script>
  `.trim(),
          },
          {
            role: "user" as const,
            content: input.slice(2),
          },
        ];

        const response = await client.chat.completions
          .create({
            messages,
            model: "gpt-4o",
            max_tokens: 2000,
          })
          .catch((e) => e);

        const dom = new DOMParser().parseFromString(response?.choices?.[0]?.message?.content, "text/html");
        const newCode = dom.querySelector("script[type='text/jsx']")?.textContent;
        if (!newCode) throw new Error("No new code found");

        location.assign(`?edit=${encodeURIComponent(newCode)}`);
      }
    };
    document.body.appendChild(modal);
    modal.showModal();
  }
});

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
