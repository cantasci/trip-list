import React, { Attributes, FC, ReactElement } from 'react';

import { Control, useController } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ControllerValueType = any | Date | string | number | null | undefined | unknown;

interface FormControllerProps {
  control: Control;
  name: string;
  children: ReactElement;
  defaultValue?: ControllerValueType;
  onChange?: (value: ControllerValueType) => void;
}
const FormController: FC<FormControllerProps> = ({
  control,
  name,
  children,
  defaultValue,
  onChange,
}) => {
  const {
    field: { ref, onBlur, onChange: onControllerChange, ...componentProps },
    // meta: { invalid, isTouched, isDirty },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const handleInternalChange = (value: ControllerValueType): void => {
    onControllerChange(value);
    onChange?.(value);
  };

  return React.isValidElement(children)
    ? React.cloneElement(children, {
        ...componentProps,
        onChange: handleInternalChange,
        checked: componentProps.value,
        register: ref,
      } as Partial<unknown> & Attributes)
    : null;
};

export default FormController;
