import { ReactNode } from 'react';

interface BasePageProps {
  children: ReactNode;
}

export type PageActionsComponent = React.FunctionComponent<BasePageProps>;
export type PageContentComponent = React.FunctionComponent<BasePageProps>;
export type PageComponent = React.FunctionComponent<BasePageProps> & {
  Actions: PageActionsComponent;
} & {
  Content: PageContentComponent;
};
