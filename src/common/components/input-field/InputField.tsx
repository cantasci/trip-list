import React, { FC } from 'react';

import {
  InputFieldError,
  InputFieldInput,
  InputFieldLabel,
  InputFieldLabelContent,
  InputFieldOuter,
} from './InputField.styles';

interface Props {
  title: string;
  name: string;
  type?: 'text' | 'file' | 'date';
  value?: string;
  error?: string;
  placeholder?: string;
  onChange?: (text: string) => void;
}
const InputField: FC<Props> = ({
  name,
  title,
  value,
  error,
  placeholder,
  onChange,
  type = 'text',
}) => {
  return (
    <InputFieldOuter>
      <InputFieldLabel htmlFor={name}>
        <InputFieldLabelContent>{title}:</InputFieldLabelContent>
        <InputFieldInput
          name={name}
          onChange={(event) => onChange?.(event.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </InputFieldLabel>
      {error ? <InputFieldError style={{ color: 'red' }}>{error}</InputFieldError> : null}
    </InputFieldOuter>
  );
};

export default InputField;
