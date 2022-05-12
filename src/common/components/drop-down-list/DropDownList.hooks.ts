import { useState, useRef, RefObject, Dispatch, SetStateAction } from 'react';

import useMouseCapture from '~/common/hooks/useMouseCapture';

interface ToggleDropDownParams {
  toggleDropdown: boolean;
  setToggleDropdown: Dispatch<SetStateAction<boolean>>;
  refDropdown: RefObject<HTMLDivElement>;
}

const useToggleDropdown = (): ToggleDropDownParams => {
  const refDropdown = useRef<HTMLDivElement>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleDropdown = ({ target }: MouseEvent | TouchEvent): void => {
    if (refDropdown?.current?.contains(target as Node)) return;

    setToggleDropdown(false);
  };

  useMouseCapture(handleDropdown);

  return { toggleDropdown, setToggleDropdown, refDropdown };
};

export default useToggleDropdown;
