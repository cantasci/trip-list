import React, { FC, useState } from 'react';

import styled from 'styled-components';

import BaseList from '~/common/components/base-list/BaseList';
import DropDownList from '~/common/components/drop-down-list/DropDownList';
import Loader from '~/common/components/loader/Loader';
import { ActionItem } from '~/common/models/ActionItem';
import { Trip } from '~/common/models/Trip';

/**
 *
 * Styles
 */
const TripListItemOuterContainer = styled.div`
  padding: 10px;

  min-height: 400px;

  border: 1px solid #d3d3d3;
`;

const TripListItemContainer = styled.div<{ isLastItem: boolean; isInProgress: boolean }>`
  display: flex;
  min-height: 100px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ isLastItem }) => (isLastItem ? 0 : 10)}px;

  ${({ isInProgress }) =>
    isInProgress &&
    `
    pointer-events: none;
    opacity: 0.6;
  `};
`;

const TripListImageContainer = styled.div`
  display: flex;
`;

const TripListImage = styled.img`
  width: 120px;
  height: auto;
`;

const TripListInfoTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const TripListInfoContainer = styled.div`
  display: flex;
  padding: 0 16px;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0;
`;

const TripListActionContainer = styled.div`
  display: flex;

  flex-direction: column;
`;

const TripListNoItemText = styled.p`
  display: flex;

  justify-content: center;
  align-items: center;
`;

/**
 *
 * Types
 */
interface Props {
  items: Trip[];
  onActionSelected: (item: Trip, action: ActionItem) => Promise<void>;
}

/**
 *
 * Static items
 */
const actionItems = [
  {
    label: 'Delete',
    value: 'Delete',
  },
];

const staticTexts = {
  LoaderText: 'Please wait..',
  EmptyText: 'No trips to show',
};

const TripList: FC<Props> = ({ items, onActionSelected }) => {
  const [selectedTrip, setSelectedTrip] = useState<Trip>();

  const handleOnActionSelected = async (item: Trip, action: ActionItem): Promise<void> => {
    try {
      setSelectedTrip(item);
      await onActionSelected(item, action);
    } finally {
      setSelectedTrip(undefined);
    }
  };

  const isItemInProgress = (item: Trip): boolean => selectedTrip?.id === item.id;

  return (
    <TripListItemOuterContainer>
      {items.length > 0 ? (
        <BaseList items={items}>
          {(item, index) => (
            <TripListItemContainer
              isInProgress={isItemInProgress(item)}
              isLastItem={index === items.length - 1}
            >
              <TripListImageContainer>
                <TripListImage alt={item.name} src={item.image_url} />
              </TripListImageContainer>
              <TripListInfoContainer>
                <TripListInfoTitle>
                  {item.name} to {item.destination}
                </TripListInfoTitle>
                <span>{`${item.start_date} - ${item.end_date}`}</span>
              </TripListInfoContainer>

              <TripListActionContainer>
                {isItemInProgress(item) ? (
                  <Loader text={staticTexts.LoaderText} />
                ) : (
                  <DropDownList
                    items={actionItems}
                    onItemSelected={(action) => handleOnActionSelected(item, action)}
                  />
                )}
              </TripListActionContainer>
            </TripListItemContainer>
          )}
        </BaseList>
      ) : (
        <TripListNoItemText>{staticTexts.EmptyText}</TripListNoItemText>
      )}
    </TripListItemOuterContainer>
  );
};

export default TripList;
