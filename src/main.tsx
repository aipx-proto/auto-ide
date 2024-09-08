import { Button, FluentProvider, webLightTheme } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Shell } from "./cdk";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <Button icon={<AddRegular />} onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <Shell>
        <Shell.Header />
        <Shell.Nav />
        <Shell.Main>
          <App />
        </Shell.Main>
      </Shell>
    </FluentProvider>
  </React.StrictMode>
);
