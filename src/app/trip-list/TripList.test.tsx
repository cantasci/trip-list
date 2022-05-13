import userEvent from '@testing-library/user-event';

import { Trip } from '~/common/models/Trip';
import { render, screen, within, act } from '~/common/utils/test.utils';

import TripList from './TripList.components';

const TEST_DATA: Trip[] = [
  {
    name: '2022 Opener Festival',
    destination: 'Gdynia-Kosakowo Airport',
    start_date: 'Jun 29, 2022',
    end_date: 'Jul 2, 2022',
    image_url:
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Open%27er_Festival_%282.07.2009_14%29.jpg',
    id: 6,
  },
  {
    name: 'Burning man 2022',
    destination: 'Black Rock Desert',
    start_date: 'Aug 28, 2022',
    end_date: 'Sep 5, 2022',
    image_url:
      'https://journal.burningman.org/wp-content/uploads/2021/04/Leori-Burning-Man-2019-11.jpg',
    id: 8,
  },
];

test('renders correctly', () => {
  const mockFnc = jest.fn();
  render(<TripList items={TEST_DATA} onActionSelected={mockFnc} />);
  const listElements = screen.getAllByRole('listitem');
  expect(listElements.length).toBe(TEST_DATA.length);
});

test('renders empty text if there is no item', () => {
  const mockFnc = jest.fn();
  render(<TripList items={[]} onActionSelected={mockFnc} />);
  const emptyTextElement = screen.getByText(/No trips to show/);
  expect(emptyTextElement).toBeInTheDocument();
});

test('triggers delete event when user clicked delete item on popup', async () => {
  const mockFnc = jest.fn();
  render(<TripList items={TEST_DATA} onActionSelected={mockFnc} />);
  const actionButtons = screen.getAllByText(/Actions/);
  const menus = screen.getAllByTestId('menu');

  // find first action button
  const firstActionItem = actionButtons[0];

  await act(async () => {
    await userEvent.click(firstActionItem);
  });

  // first popup should be visible when user clicked the action button
  expect(menus[0]).toBeVisible();

  // find delete button in popup container
  const deleteButton = within(menus[0]).getByText('Delete');
  await act(async () => {
    await userEvent.click(deleteButton);
  });

  expect(mockFnc).toBeCalledTimes(1);
});
