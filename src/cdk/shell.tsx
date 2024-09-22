import {
  Avatar,
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Caption1Strong,
  Tab,
  TabList,
  Toolbar,
  ToolbarButton,
} from "@fluentui/react-components";
import {
  AppsFilled,
  AppsRegular,
  BeakerFilled,
  BeakerRegular,
  BotFilled,
  BotRegular,
  BoxMultipleFilled,
  BoxMultipleRegular,
  bundleIcon,
  ChatMultipleFilled,
  ChatMultipleRegular,
  CloudFlowFilled,
  CloudFlowRegular,
  CloverFilled,
  CloverRegular,
  CodeBlockFilled,
  CodeBlockRegular,
  CubeFilled,
  CubeRegular,
  DatabaseFilled,
  DatabaseRegular,
  DatabaseSearchFilled,
  DatabaseSearchRegular,
  EmojiSmileSlightRegular,
  GridFilled,
  GridRegular,
  HomeFilled,
  HomeRegular,
  KeyMultipleFilled,
  KeyMultipleRegular,
  LaptopFilled,
  LaptopRegular,
  MicroscopeFilled,
  MicroscopeRegular,
  OrganizationFilled,
  OrganizationRegular,
  PanelLeftContractRegular,
  PromptFilled,
  PromptRegular,
  ProtocolHandlerFilled,
  ProtocolHandlerRegular,
  SavingsFilled,
  SavingsRegular,
  ScalesFilled,
  ScalesRegular,
  ServerMultipleFilled,
  ServerMultipleRegular,
  SettingsRegular,
  ShieldTaskFilled,
  ShieldTaskRegular,
} from "@fluentui/react-icons";
import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

const AppsAuto = bundleIcon(AppsFilled, AppsRegular);
const BeakerAuto = bundleIcon(BeakerFilled, BeakerRegular);
const BotAuto = bundleIcon(BotFilled, BotRegular);
const BoxMultipleAuto = bundleIcon(BoxMultipleFilled, BoxMultipleRegular);
const ChatMultipleAuto = bundleIcon(ChatMultipleFilled, ChatMultipleRegular);
const CloverAuto = bundleIcon(CloverFilled, CloverRegular);
const CodeBlockAuto = bundleIcon(CodeBlockFilled, CodeBlockRegular);
const CubeAuto = bundleIcon(CubeFilled, CubeRegular);
const DatabaseAuto = bundleIcon(DatabaseFilled, DatabaseRegular);
const DatabaseSearchAuto = bundleIcon(DatabaseSearchFilled, DatabaseSearchRegular);
const GridAuto = bundleIcon(GridFilled, GridRegular);
const HomeAuto = bundleIcon(HomeFilled, HomeRegular);
const KeyMultipleAuto = bundleIcon(KeyMultipleFilled, KeyMultipleRegular);
const MicroscopeAuto = bundleIcon(MicroscopeFilled, MicroscopeRegular);
const PromptAuto = bundleIcon(PromptFilled, PromptRegular);
const ProtocolHandlerAuto = bundleIcon(ProtocolHandlerFilled, ProtocolHandlerRegular);
const SavingsAuto = bundleIcon(SavingsFilled, SavingsRegular);
const ScalesAuto = bundleIcon(ScalesFilled, ScalesRegular);
const ShieldTaskAuto = bundleIcon(ShieldTaskFilled, ShieldTaskRegular);
const CloudFlowAuto = bundleIcon(CloudFlowFilled, CloudFlowRegular);
const ServerMultipleAuto = bundleIcon(ServerMultipleFilled, ServerMultipleRegular);
const OrganizationAuto = bundleIcon(OrganizationFilled, OrganizationRegular);
const LaptopAuto = bundleIcon(LaptopFilled, LaptopRegular);

export interface AppShellProps {
  breadcrumbs?: string[];
  activeItem?: string;
  children?: React.ReactNode;
}
export function AppShell(props: AppShellProps) {
  const breadcrumbItems = props.breadcrumbs?.map((label, index) => ({ label, href: "#" }));

  return (
    <Shell>
      <RootHeader breadcrumb={breadcrumbItems} />
      <ShellParentNav activeItem={props.activeItem} />
      <ShellMain>{props.children}</ShellMain>
    </Shell>
  );
}

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

export interface ShellHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
}
export const RootHeader = (props: ShellHeaderProps) => {
  return (
    <HeaderLayout {...props}>
      <ToolbarLeft>
        <IconHomeLink>
          <Button appearance="subtle" icon={<PanelLeftContractRegular />} />
          <HomeLink href="#">
            <img
              width={18}
              height={18}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMi43NiIgeTE9IjExLjk3IiB4Mj0iMTAuMjYiIHkyPSIxLjk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzEyNTc1Ii8+PHN0b3Agb2Zmc2V0PSIuMDkiIHN0b3AtY29sb3I9IiM5YTI4ODQiLz48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iI2JmMmM5MiIvPjxzdG9wIG9mZnNldD0iLjI3IiBzdG9wLWNvbG9yPSIjZGEyZTljIi8+PHN0b3Agb2Zmc2V0PSIuMzQiIHN0b3AtY29sb3I9IiNlYjMwYTIiLz48c3RvcCBvZmZzZXQ9Ii40IiBzdG9wLWNvbG9yPSIjZjEzMWE1Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iI2VjMzBhMyIvPjxzdG9wIG9mZnNldD0iLjYxIiBzdG9wLWNvbG9yPSIjZGYyZjllIi8+PHN0b3Agb2Zmc2V0PSIuNzIiIHN0b3AtY29sb3I9IiNjOTJkOTYiLz48c3RvcCBvZmZzZXQ9Ii44MyIgc3RvcC1jb2xvcj0iI2FhMmE4YSIvPjxzdG9wIG9mZnNldD0iLjk1IiBzdG9wLWNvbG9yPSIjODMyNjdjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzEyNTc1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxMy43MSIgeTE9IjEuOCIgeDI9IjEzLjcxIiB5Mj0iMTUuOTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkYTdlZDAiLz48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iI2IxN2JkNSIvPjxzdG9wIG9mZnNldD0iLjE5IiBzdG9wLWNvbG9yPSIjODc3OGRiIi8+PHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iIzYyNzZlMSIvPjxzdG9wIG9mZnNldD0iLjQxIiBzdG9wLWNvbG9yPSIjNDU3NGU1Ii8+PHN0b3Agb2Zmc2V0PSIuNTQiIHN0b3AtY29sb3I9IiMyZTcyZTgiLz48c3RvcCBvZmZzZXQ9Ii42NyIgc3RvcC1jb2xvcj0iIzFkNzFlYiIvPjxzdG9wIG9mZnNldD0iLjgxIiBzdG9wLWNvbG9yPSIjMTQ3MWVjIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTE3MWVkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIxMi44NiIgeTE9IjIuMTIiIHgyPSIzLjUiIHkyPSIxNy4xMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RhN2VkMCIvPjxzdG9wIG9mZnNldD0iLjA1IiBzdG9wLWNvbG9yPSIjYjc3YmQ0Ii8+PHN0b3Agb2Zmc2V0PSIuMTEiIHN0b3AtY29sb3I9IiM5MDc5ZGEiLz48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzZlNzdkZiIvPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjNTE3NWUzIi8+PHN0b3Agb2Zmc2V0PSIuMzMiIHN0b3AtY29sb3I9IiMzOTczZTciLz48c3RvcCBvZmZzZXQ9Ii40MiIgc3RvcC1jb2xvcj0iIzI3NzJlOSIvPjxzdG9wIG9mZnNldD0iLjU0IiBzdG9wLWNvbG9yPSIjMWE3MWViIi8+PHN0b3Agb2Zmc2V0PSIuNjgiIHN0b3AtY29sb3I9IiMxMzcxZWMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMTcxZWQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMTEuNTIgMS41OWMuNDQgMCAuODMuMzMuOTcuODFzLjk2IDMuNDUuOTYgMy40NXY1LjloLTIuOTdsLjA2LTEwLjE3aC45OFoiIHN0eWxlPSJzdHJva2Utd2lkdGg6MDtmaWxsOnVybCgjYSk7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTUuODggNi4yYS4zNy4zNyAwIDAgMC0uMzctLjM3aC0xLjc1Yy0xLjIzIDAtMi4yMyAxLTIuMjMgMi4yM3YzLjdoMi4xMmMxLjIzIDAgMi4yMy0xIDIuMjMtMi4yM3oiIHN0eWxlPSJzdHJva2Utd2lkdGg6MDtmaWxsOnVybCgjYikiLz48cGF0aCBkPSJNMTEuNTIgMS41OWMtLjM0IDAtLjYxLjI3LS42MS42MWwtLjA2IDExLjIzYTIuOTcgMi45NyAwIDAgMS0yLjk3IDIuOTdIMi40OWMtLjI2IDAtLjQzLS4yNS0uMzUtLjQ5TDYuNDYgMy41OGEyLjk3IDIuOTcgMCAwIDEgMi44LTEuOTloMi4yN1oiIHN0eWxlPSJzdHJva2Utd2lkdGg6MDtmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjYykiLz48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDowIiBkPSJNMCAwaDE4djE4SDB6Ii8+PC9zdmc+"
            />
            Azure AI Studio
          </HomeLink>
        </IconHomeLink>
        {props.breadcrumb?.length ? (
          <Breadcrumb aria-label="Breadcrumb default example">
            {props.breadcrumb.map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbButton href={item.href ?? "#"} current={1 + index === props.breadcrumb?.length}>
                    {item.label}
                  </BreadcrumbButton>
                </BreadcrumbItem>
                {index !== props.breadcrumb!.length - 1 ? <BreadcrumbDivider /> : null}
              </Fragment>
            ))}
          </Breadcrumb>
        ) : null}
      </ToolbarLeft>
      <Toolbar>
        <ToolbarButton icon={<EmojiSmileSlightRegular />} />
        <ToolbarButton icon={<SettingsRegular />} />
        <ToolbarButton appearance="transparent" icon={<Avatar size={24} name="Mono King" />} />
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
  gap: 0px 16px;
`;

const ToolbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0px 24px;
`;

const IconHomeLink = styled.div`
  display: grid;
  grid-template-columns: auto auto;
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

const currentPage = new URLSearchParams(window.location.search).get("page");

export interface ShellNavProps extends React.HTMLAttributes<HTMLDivElement> {
  activeItem?: string;
}
export const ShellNav = (props: ShellNavProps) => {
  return (
    <NavLayout {...props}>
      <TabList vertical selectedValue={currentPage ?? "home"} onTabSelect={(_, data) => handleTabSelect(data.value as any)}>
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
        <Tab icon={<MicroscopeAuto />} value="experiment">
          Experiments
        </Tab>
      </TabList>
    </NavLayout>
  );
};

export const ShellLegacyRootNav = (props: ShellNavProps) => {
  return (
    <NavLayout {...props}>
      <TabList vertical selectedValue={currentPage ?? "home"} onTabSelect={(_, data) => handleTabSelect(data.value as any)}>
        <Tab icon={<HomeAuto />} value="home">
          Home
        </Tab>
        <IndentedCaption>Get started</IndentedCaption>
        <Tab icon={<BoxMultipleAuto />} value="model-catalog">
          Model catalog
        </Tab>
        <Tab icon={<ScalesAuto />} value="model-benchmarks">
          Model brnchmarks
        </Tab>
        <Tab icon={<PromptAuto />} value="promopt-catalog">
          Prompt catalog
        </Tab>
        <Tab icon={<CubeAuto />} value="azure-openai">
          Azure OpenAI
        </Tab>
        <Tab icon={<ProtocolHandlerAuto />} value="ai-services">
          AI Services
        </Tab>
        <IndentedCaption>Management</IndentedCaption>
        <Tab icon={<CloverAuto />} value="all-hubs">
          All hubs
        </Tab>
        <Tab icon={<KeyMultipleAuto />} value="resources-and-keys">
          Resources and keys
        </Tab>
        <Tab icon={<SavingsAuto />} value="savings">
          Quota
        </Tab>
      </TabList>
    </NavLayout>
  );
};

export const ShellParentNav = (props: ShellNavProps) => {
  return (
    <NavLayout {...props}>
      <TabList vertical selectedValue={props.activeItem ?? "home"} onTabSelect={(_, data) => handleTabSelect(data.value as any)}>
        <Tab icon={<HomeAuto />} value="home">
          Home
        </Tab>
        <Tab icon={<BoxMultipleAuto />} value="model-catalog">
          Model catalog
        </Tab>
        <Tab icon={<ChatMultipleAuto />} value="playground">
          Playgrounds
        </Tab>
        <Tab icon={<ProtocolHandlerAuto />} value="ai-services">
          AI Services
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
        <IndentedCaption>Assets</IndentedCaption>
        <Tab icon={<CubeAuto />} value="model-deployments">
          Model deployments
        </Tab>
        <Tab icon={<AppsAuto />} value="endpoints-apps">
          Endpoints + apps
        </Tab>
        <Tab icon={<DatabaseAuto />} value="data-indexes">
          Data + Indexes
        </Tab>
      </TabList>
    </NavLayout>
  );
};

export const ShellLegacyL2Nav = (props: ShellNavProps) => {
  return (
    <NavLayout {...props}>
      <TabList vertical selectedValue={currentPage ?? "home"} onTabSelect={(_, data) => handleTabSelect(data.value as any)}>
        <Tab icon={<HomeAuto />} value="hub-overview">
          Hub overview
        </Tab>
        <Tab icon={<GridAuto />} value="all-projects">
          All projects
        </Tab>

        <IndentedCaption>Get started</IndentedCaption>
        <Tab icon={<ScalesAuto />} value="model-benchmarks">
          Model benchmarks
        </Tab>
        <Tab icon={<PromptAuto />} value="promopt-catalog">
          Prompt catalog
        </Tab>
        <Tab icon={<CubeAuto />} value="azure-openai">
          Azure OpenAI
        </Tab>
        <Tab icon={<ProtocolHandlerAuto />} value="ai-services">
          AI Services
        </Tab>

        <IndentedCaption>Playgrounds</IndentedCaption>
        <Tab icon={<ChatMultipleAuto />} value="chat">
          Chat
        </Tab>
        <Tab icon={<BotAuto />} value="agent">
          Agent
        </Tab>

        <IndentedCaption>Shared resources</IndentedCaption>
        <Tab icon={<CloudFlowAuto />} value="deployments">
          Deployments
        </Tab>
        <Tab icon={<ServerMultipleAuto />} value="connections">
          Connections
        </Tab>

        <Tab icon={<LaptopAuto />} value="compute-instances">
          Compute instances
        </Tab>
        <Tab icon={<OrganizationAuto />} value="users">
          Users
        </Tab>
        <Tab icon={<ShieldTaskAuto />} value="content-filters ">
          Content filters
        </Tab>
      </TabList>
    </NavLayout>
  );
};

function handleTabSelect(newPageName: string) {
  const currentSearchParams = new URLSearchParams(window.location.search);
  currentSearchParams.set("page", newPageName);
  location.assign(`?${currentSearchParams.toString()}`);
}

const NavLayout = styled.nav`
  grid-area: nav;
  overflow-y: auto;
  scrollbar-gutter: stable;
  padding-inline: 8px;
  padding-block: 16px;

  @media screen and (max-width: 40rem) {
    display: none;
  }
`;

const IndentedCaption = styled(Caption1Strong)`
  margin-inline-start: 12px;
  padding-block: 8px;
`;

export interface ShellMainProps extends React.HTMLAttributes<HTMLDivElement> {}
export const ShellMain = (props: ShellMainProps) => {
  return <MainLayout {...props} />;
};
const MainLayout = styled.main`
  grid-area: main;
  overflow-y: auto;
  scrollbar-gutter: stable;
  background: white;
  border-radius: 8px 0 0 0;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
`;
