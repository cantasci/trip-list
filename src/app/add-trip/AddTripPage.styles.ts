import styled from 'styled-components';

export const TripListItemOuterContainer = styled.div`
  padding: 10px;

  border: 1px solid #d3d3d3;
`;

export const TripListItemContainer = styled.div<{ isLastItem: boolean }>`
  display: flex;
  min-height: 100px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ isLastItem }) => (isLastItem ? 0 : 10)}px;
`;

export const TripListImageContainer = styled.div`
  display: flex;
`;

export const TripListImage = styled.img`
  width: 120px;
  height: auto;
`;

export const TripListInfoTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

export const TripListInfoContainer = styled.div`
  display: flex;
  padding: 0 16px;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0;
`;

export const TripListActionContainer = styled.div`
  display: flex;

  flex-direction: column;
`;
