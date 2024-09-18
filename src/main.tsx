import { Button, FluentProvider, webLightTheme } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { AppShell } from "./cdk";

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
      <AppShell breadcrumbs={["Home", "Project", "Feature", "Area"]} activeItem="evaluation">
        <App />
      </AppShell>
    </FluentProvider>
  </React.StrictMode>
);
