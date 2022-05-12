import { FC } from 'react';

import userEvent from '@testing-library/user-event';

import { render, screen } from '~/common/utils/test.utils';

import Button from './Button';

const mockFnc = jest.fn();

const SimpleButton: FC = () => <Button onClick={mockFnc} title="Test" />;

test('renders white colored border by default', () => {
  render(<SimpleButton />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveStyle(`border: 1px solid #d3d3d3;`);
});

test('triggers onClick function when user clicked the button event occurred', async () => {
  render(<SimpleButton />);
  const buttonElement = screen.getByRole('button');

  await userEvent.click(buttonElement);
  expect(mockFnc).toBeCalledTimes(1);
});
