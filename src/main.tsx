import { FluentProvider, Link, Tab, TabList, Toolbar, ToolbarButton, ToolbarDivider, webLightTheme } from "@fluentui/react-components";
import { CircleRegular } from "@fluentui/react-icons";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppShell } from "./cdk";
import { PageContent, PageGrid, PageHeader } from "./cdk/page";

function App() {
  return (
    <PageGrid>
      <PageHeader
        pageTitle="Title"
        toolbar={
          <Toolbar>
            <ToolbarButton aria-label="Button 1" icon={<CircleRegular />} />
            <ToolbarButton aria-label="Button 2" icon={<CircleRegular />} />
            <ToolbarDivider />
            <ToolbarButton aria-label="Button 3" icon={<CircleRegular />}>
              Action
            </ToolbarButton>
            <ToolbarButton aria-label="Button 4" appearance="primary" icon={<CircleRegular />}>
              Pirmary action
            </ToolbarButton>
          </Toolbar>
        }
      />
      <PageHeader
        pageTitle="Title"
        details={
          <div>
            Message providing information to the user with actionable insights. <Link href="#">View documentation</Link>
          </div>
        }
      />
      <PageHeader
        pageTitle="Title"
        toolbar={
          <Toolbar>
            <ToolbarButton aria-label="Button 1" icon={<CircleRegular />} />
            <ToolbarButton aria-label="Button 2" icon={<CircleRegular />} />
            <ToolbarDivider />
            <ToolbarButton aria-label="Button 3" icon={<CircleRegular />}>
              Action
            </ToolbarButton>
            <ToolbarButton aria-label="Button 4" appearance="primary" icon={<CircleRegular />}>
              Pirmary action
            </ToolbarButton>
          </Toolbar>
        }
        details={
          <TabList defaultSelectedValue="tab1">
            <Tab value="tab1">First Tab</Tab>
            <Tab value="tab2">Second Tab</Tab>
            <Tab value="tab3">Third Tab</Tab>
          </TabList>
        }
      />
      <PageContent>{"hello world".repeat(1_000)}</PageContent>
    </PageGrid>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <AppShell>
        <App />
      </AppShell>
    </FluentProvider>
  </React.StrictMode>
);
