import React, { FC, useRef } from 'react';

import { ActionItem } from '~/common/models/ActionItem';

import useToggleDropdown from './DropDownList.hooks';
import {
  DropDownListContainer,
  DropDownListItem,
  DropDownListLabel,
  DropDownListPopupContainer,
} from './DropDownList.styles';

interface Props {
  items: ActionItem[];
  onItemSelected: (action: ActionItem) => void;
}

const DropDownList: FC<Props> = ({ items, onItemSelected }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const { toggleDropdown, setToggleDropdown, refDropdown } = useToggleDropdown();

  const toggleDropdownHandler = (): void => {
    setToggleDropdown(!toggleDropdown);
  };

  const selectItem = (item: ActionItem) => (): void => {
    onItemSelected(item);
    setToggleDropdown(false);
  };

  return (
    <DropDownListContainer ref={refDropdown}>
      <DropDownListLabel onClick={toggleDropdownHandler}>Actions</DropDownListLabel>
      <DropDownListPopupContainer ref={popupRef} shown={toggleDropdown}>
        {items.map((item) => (
          <DropDownListItem key={`action-item-${item.label}`} onClick={selectItem(item)}>
            {item.label}
          </DropDownListItem>
        ))}
      </DropDownListPopupContainer>
    </DropDownListContainer>
  );
};

export default DropDownList;
