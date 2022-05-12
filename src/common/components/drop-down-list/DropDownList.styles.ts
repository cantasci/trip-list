import styled from 'styled-components';

export const DropDownListContainer = styled.div`
  position: relative;
`;

export const DropDownListLabel = styled.label`
  cursor: pointer;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const DropDownListPopupContainer = styled.div<{ shown: boolean }>`
  position: absolute;
  top: 32px;
  right: 0;
  z-index: 1;

  display: ${({ shown }) => (shown ? 'block' : 'none')};
  padding: 10px;
  min-width: 100px;

  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const DropDownListItem = styled.div`
  cursor: pointer;
`;
