import { FC } from 'react';

import userEvent from '@testing-library/user-event';

import { render, screen } from '~/common/utils/test.utils';

import InputField from './InputField';

const SimpleText: FC = () => <InputField name="test-id" title="testLabel" value="myValue" />;

const ErroneousText: FC = () => (
  <InputField error="errorMessage" name="test-id" title="testLabel" />
);

test('renders <label> tag', () => {
  render(<SimpleText />);
  const labelElement = screen.getByText(/testLabel/i);
  expect(labelElement.tagName).toBe('SPAN');
});

test('renders <input> tag', () => {
  render(<SimpleText />);
  const inputElement = screen.getByDisplayValue(/myValue/);
  expect(inputElement.tagName).toBe('INPUT');
});

test('renders <p> tag when error exists', () => {
  render(<ErroneousText />);
  const inputElement = screen.getByText(/errorMessage/);
  expect(inputElement.tagName).toBe('P');
});

test('triggers onChange function when change event occurred', async () => {
  const mockFnc = jest.fn();
  render(
    <InputField
      error="errorMessage"
      name="test-id"
      onChange={mockFnc}
      placeholder="test label"
      title="testLabel"
    />
  );
  const inputElement = screen.getByPlaceholderText(/test label/);
  await userEvent.type(inputElement, 'a');
  expect(mockFnc).toHaveBeenCalledTimes(1);
});
