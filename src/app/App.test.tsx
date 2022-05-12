import { render, screen } from '~/common/utils/test.utils';

import App from './App';

test('renders add new trip button by default', () => {
  render(<App />);
  const buttonElement = screen.getByText(/add new trip/i);
  expect(buttonElement).toBeInTheDocument();
});
