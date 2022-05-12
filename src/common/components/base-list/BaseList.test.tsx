import { render, screen } from '~/common/utils/test.utils';

import BaseList from './BaseList';

const TEST_DATA = Array(10)
  .fill(null)
  .map((_, index) => ({
    label: `Test - ${index + 1}`,
  }));

test('renders correctly', () => {
  render(<BaseList items={TEST_DATA}>{(item) => <p>{item.label}</p>}</BaseList>);
  const listElements = screen.getAllByRole('listitem');
  expect(listElements.length).toBe(TEST_DATA.length);
  expect(listElements[1]).toContainHTML(TEST_DATA[1].label);
});
