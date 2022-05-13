import userEvent from '@testing-library/user-event';

import { ActionItem } from '~/common/models/ActionItem';
import { render, screen, act } from '~/common/utils/test.utils';

import DropDownList from './DropDownList';

const actionItems: ActionItem[] = [
  {
    label: 'Delete',
    value: 'Delete',
  },
];

test('renders correctly', () => {
  const mockFnc = jest.fn();
  render(<DropDownList items={actionItems} onItemSelected={mockFnc} />);
  const menu = screen.getByTestId('menu');
  expect(menu.childNodes.length).toBe(actionItems.length);
});

test('display options when dropdownlist clicked', async () => {
  const mockFnc = jest.fn();
  render(<DropDownList items={actionItems} onItemSelected={mockFnc} />);
  const actionButtonElement = screen.getByText(/Actions/);
  expect(actionButtonElement).toBeInTheDocument();

  const menu = screen.getByTestId('menu');
  await act(async () => {
    await userEvent.click(actionButtonElement);
  });

  // first popup should be visible when user clicked the action button
  expect(menu).toBeVisible();
});
