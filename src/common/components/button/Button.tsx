/* eslint-disable react/require-default-props */
import React, { FC, ReactNode } from 'react';

import { BaseButton } from './Button.styles';

interface Props {
  title: ReactNode;
  onClick: () => void;
  type?: 'submit' | 'button' | 'reset';
}

const Button: FC<Props> = ({ title, onClick, type = 'button' }) => {
  return (
    <BaseButton onClick={onClick} role="button" type={type}>
      {title}
    </BaseButton>
  );
};

export default Button;
