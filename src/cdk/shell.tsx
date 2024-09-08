import { Button, Caption1Strong, Tab, TabList, Toolbar, ToolbarButton } from "@fluentui/react-components";
import {
  BeakerFilled,
  BeakerRegular,
  BoxMultipleFilled,
  BoxMultipleRegular,
  ChatMultipleFilled,
  ChatMultipleRegular,
  CodeBlockFilled,
  CodeBlockRegular,
  DatabaseSearchFilled,
  DatabaseSearchRegular,
  EmojiSmileSlightRegular,
  HomeFilled,
  HomeRegular,
  PanelLeftContractRegular,
  ScalesFilled,
  ScalesRegular,
  SettingsRegular,
  ShieldTaskFilled,
  ShieldTaskRegular,
  bundleIcon,
} from "@fluentui/react-icons";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const HomeAuto = bundleIcon(HomeFilled, HomeRegular);
const BoxMultipleAuto = bundleIcon(BoxMultipleFilled, BoxMultipleRegular);
const ChatMultipleAuto = bundleIcon(ChatMultipleFilled, ChatMultipleRegular);
const CodeBlockAuto = bundleIcon(CodeBlockFilled, CodeBlockRegular);
const BeakerAuto = bundleIcon(BeakerFilled, BeakerRegular);
const DatabaseSearchAuto = bundleIcon(DatabaseSearchFilled, DatabaseSearchRegular);
const ScalesAuto = bundleIcon(ScalesFilled, ScalesRegular);
const ShieldTaskAuto = bundleIcon(ShieldTaskFilled, ShieldTaskRegular);

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}
export function Shell(props: ShellProps) {
  return (
    <ShellLayout>
      <GlobalStyle />
      {props.children}
    </ShellLayout>
  );
}

const ShellLayout = styled.div`
  height: 100%;
  background: linear-gradient(108deg, rgba(225, 237, 252, 0.2) 0%, rgba(159, 194, 238, 0.2) 99.79%), #fafafa;

  /* Elevation/Light/Shadow 08 */
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);

  display: grid;
  grid-template:
    "header header" auto
    "nav main" 1fr / auto 1fr;
`;

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    html,body,#root {
      height: 100%;
    }

    .fui-FluentProvider {
      display: contents;
    }
    `;

export interface ShellHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
Shell.Header = (props: ShellHeaderProps) => {
  return (
    <HeaderLayout {...props}>
      <ToolbarLeft>
        <Button appearance="subtle" icon={<PanelLeftContractRegular />} />
        <HomeLink href="#">
          <img
            width={18}
            height={18}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMi43NiIgeTE9IjExLjk3IiB4Mj0iMTAuMjYiIHkyPSIxLjk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzEyNTc1Ii8+PHN0b3Agb2Zmc2V0PSIuMDkiIHN0b3AtY29sb3I9IiM5YTI4ODQiLz48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iI2JmMmM5MiIvPjxzdG9wIG9mZnNldD0iLjI3IiBzdG9wLWNvbG9yPSIjZGEyZTljIi8+PHN0b3Agb2Zmc2V0PSIuMzQiIHN0b3AtY29sb3I9IiNlYjMwYTIiLz48c3RvcCBvZmZzZXQ9Ii40IiBzdG9wLWNvbG9yPSIjZjEzMWE1Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2VjMzBhMyIvPjxzdG9wIG9mZnNldD0iLjYxIiBzdG9wLWNvbG9yPSIjZGYyZjllIi8+PHN0b3Agb2Zmc2V0PSIuNzIiIHN0b3AtY29sb3I9IiNjOTJkOTYiLz48c3RvcCBvZmZzZXQ9Ii44MyIgc3RvcC1jb2xvcj0iI2FhMmE4YSIvPjxzdG9wIG9mZnNldD0iLjk1IiBzdG9wLWNvbG9yPSIjODMyNjdjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzEyNTc1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxMy43MSIgeTE9IjEuOCIgeDI9IjEzLjcxIiB5Mj0iMTUuOTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYTdlZDAiLz48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iI2IxN2JkNSIvPjxzdG9wIG9mZnNldD0iLjE5IiBzdG9wLWNvbG9yPSIjODc3OGRiIi8+PHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iIzYyNzZlMSIvPjxzdG9wIG9mZnNldD0iLjQxIiBzdG9wLWNvbG9yPSIjNDU3NGU1Ii8+PHN0b3Agb2Zmc2V0PSIuNTQiIHN0b3AtY29sb3I9IiMyZTcyZTgiLz48c3RvcCBvZmZzZXQ9Ii42NyIgc3RvcC1jb2xvcj0iIzFkNzFlYiIvPjxzdG9wIG9mZnNldD0iLjgxIiBzdG9wLWNvbG9yPSIjMTQ3MWVjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTE3MWVkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxMi44NiIgeTE9IjIuMTIiIHgyPSIzLjUiIHkyPSIxNy4xMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RhN2VkMCIvPjxzdG9wIG9mZnNldD0iLjA1IiBzdG9wLWNvbG9yPSIjYjc3YmQ0Ii8+PHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiM5MDc5ZGEiLz48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzZlNzdkZiIvPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjNTE3NWUzIi8+PHN0b3Agb2Zmc2V0PSIuMzMiIHN0b3AtY29sb3I9IiMzOTczZTciLz48c3RvcCBvZmZzZXQ9Ii40MiIgc3RvcC1jb2xvcj0iIzI3NzJlOSIvPjxzdG9wIG9mZnNldD0iLjU0IiBzdG9wLWNvbG9yPSIjMWE3MWViIi8+PHN0b3Agb2Zmc2V0PSIuNjgiIHN0b3AtY29sb3I9IiMxMzcxZWMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMTcxZWQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMTEuNTIgMS41OWMuNDQgMCAuODMuMzMuOTcuODFzLjk2IDMuNDUuOTYgMy40NXY1LjloLTIuOTdsLjA2LTEwLjE3aC45OFoiIHN0eWxlPSJzdHJva2Utd2lkdGg6MDtmaWxsOnVybCgjYSk7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTUuODggNi4yYS4zNy4zNyAwIDAgMC0uMzctLjM3aC0xLjc1Yy0xLjIzIDAtMi4yMyAxLTIuMjMgMi4yM3YzLjdoMi4xMmMxLjIzIDAgMi4yMy0xIDIuMjMtMi4yM3oiIHN0eWxlPSJzdHJva2Utd2lkdGg6MDtmaWxsOnVybCgjYikiLz48cGF0aCBkPSJNMTEuNTIgMS41OWMtLjM0IDAtLjYxLjI3LS42MS42MWwtLjA2IDExLjIzYTIuOTcgMi45NyAwIDAgMS0yLjk3IDIuOTdIMi40OWMtLjI2IDAtLjQzLS4yNS0uMzUtLjQ5TDYuNDYgMy41OGEyLjk3IDIuOTcgMCAwIDEgMi44LTEuOTloMi4yN1oiIHN0eWxlPSJzdHJva2Utd2lkdGg6MDtmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjYykiLz48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowIiBkPSJNMCAwaDE4djE4SDB6Ii8+PC9zdmc+"
          />
          Azure AI Studio
        </HomeLink>
      </ToolbarLeft>
      <Toolbar>
        <ToolbarButton icon={<EmojiSmileSlightRegular />} />
        <ToolbarButton icon={<SettingsRegular />} />
      </Toolbar>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  grid-area: header;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  gap: 16px;
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HomeLink = styled.a`
  display: flex;
  gap: 4px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export interface ShellNavProps extends React.HTMLAttributes<HTMLDivElement> {}
Shell.Nav = (props: ShellNavProps) => {
  return (
    <NavLayout {...props}>
      <TabList defaultSelectedValue="home" vertical>
        <Tab icon={<HomeAuto />} value="home">
          Home
        </Tab>
        <Tab icon={<BoxMultipleAuto />} value="model-catalog">
          Model catalog
        </Tab>
        <Tab icon={<ChatMultipleAuto />} value="playground">
          Playgrounds
        </Tab>
        <IndentedCaption>Build and customize</IndentedCaption>
        <Tab icon={<CodeBlockAuto />} value="code">
          Code
        </Tab>
        <Tab icon={<BeakerAuto />} value="fine-tuning">
          Fine-tuning
        </Tab>
        <IndentedCaption>Assess performance</IndentedCaption>
        <Tab icon={<DatabaseSearchAuto />} value="tracing">
          Tracing
        </Tab>
        <Tab icon={<ScalesAuto />} value="evaluation">
          Evaluation
        </Tab>
        <Tab icon={<ShieldTaskAuto />} value="content-filters ">
          Content filters
        </Tab>
      </TabList>
    </NavLayout>
  );
};

const NavLayout = styled.nav`
  grid-area: nav;
  overflow-y: auto;
  padding-inline-start: 8px;
  padding-block: 16px;
`;

const IndentedCaption = styled(Caption1Strong)`
  margin-inline-start: 12px;
  padding-block: 8px;
`;

export interface ShellMainProps extends React.HTMLAttributes<HTMLDivElement> {}
Shell.Main = (props: ShellMainProps) => {
  return <MainLayout {...props} />;
};
const MainLayout = styled.main`
  grid-area: main;
  overflow-y: auto;
  background: white;
  border-radius: 8px 0 0 0;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
`;
