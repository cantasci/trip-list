import { render, screen } from '~/common/utils/test.utils';

import Loader from './Loader';

test('renders <p> tag', () => {
  render(<Loader />);
  const loaderElement = screen.getByText(/loading.../i);
  expect(loaderElement.tagName).toBe('P');
});

test('renders with different content', () => {
  render(<Loader text="please wait..." />);
  const loaderElement = screen.getByText(/please wait.../i);
  expect(loaderElement).toBeInTheDocument();
});
