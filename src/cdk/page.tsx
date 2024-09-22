import { Title3, tokens } from "@fluentui/react-components";
import React from "react";
import styled from "styled-components";

export interface PageHeaderProps {
  pageTitle: string;
  toolbar?: React.ReactNode;
  details?: React.ReactNode;
  fullWidth?: boolean;
}
export function PageHeader(props: PageHeaderProps) {
  return (
    <PageHeaderLayout $fullWidth={props.fullWidth}>
      <PageHeaderTitleArea>
        <Title3>{props.pageTitle}</Title3>
      </PageHeaderTitleArea>
      <PageHeaderToolbarArea>{props.toolbar}</PageHeaderToolbarArea>
      <PageHeaderDetailsArea>{props.details}</PageHeaderDetailsArea>
    </PageHeaderLayout>
  );
}

export const PageHeaderLayout = styled.header<{ $fullWidth?: boolean }>`
  display: grid;
  grid-template:
    "title" auto
    "toolbar" auto
    "context" auto / 1fr;

  padding-block-start: 24px;
  padding-inline: ${(props) => (props.$fullWidth ? "1rem" : "max(1rem, calc((100vw - 1060px) / 2))")};
  border-bottom: 1px solid ${tokens.colorNeutralStroke2};

  @media screen and (min-width: 60rem) {
    grid-template:
      "title toolbar" auto
      "context context" auto / 1fr auto;
  }
`;

const PageHeaderTitleArea = styled.div`
  grid-area: title;
`;

const PageHeaderToolbarArea = styled.div`
  grid-area: toolbar;
`;

const PageHeaderDetailsArea = styled.div`
  grid-area: context;
  &:not(:has([role="tablist"])) {
    padding-block: 8px 16px;
  }

  [role="tablist"] {
    margin-inline-start: -10px;
  }
`;

export interface PageContentProps {
  children: React.ReactNode;
}

export function PageContent(props: PageContentProps) {
  return <PageContentLayout>{props.children}</PageContentLayout>;
}

export const PageContentLayout = styled.main<{ $fullWidth?: boolean }>`
  overflow: auto;
  padding-block: 24px;
  padding-inline: ${(props) => (props.$fullWidth ? "1rem" : "max(1rem, calc((100vw - 1060px) / 2))")};
`;

export const PageGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${PageHeaderLayout} {
    flex: 0 0 auto;
  }

  ${PageContentLayout} {
    flex: 1 1 auto;
  }
`;
