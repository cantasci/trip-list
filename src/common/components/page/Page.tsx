import { PageActions, PageContainer, PageContent } from './Page.styles';
import { PageComponent } from './Page.types';

const Page: PageComponent = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

Page.Actions = PageActions;
Page.Content = PageContent;

export default Page;
