import React, { FC, useState } from 'react';

import BaseList from '~/common/components/base-list/BaseList';
import DropDownList from '~/common/components/drop-down-list/DropDownList';
import Loader from '~/common/components/loader/Loader';
import { ActionItem } from '~/common/models/ActionItem';
import { Trip } from '~/common/models/Trip';

import {
  TripListActionContainer,
  TripListImage,
  TripListImageContainer,
  TripListInfoContainer,
  TripListInfoTitle,
  TripListItemContainer,
  TripListItemOuterContainer,
} from './TripList.styles';

interface Props {
  items: Trip[];
  onActionSelected: (item: Trip, action: ActionItem) => Promise<void>;
}

const TripList: FC<Props> = ({ items, onActionSelected }) => {
  const [selectedTrip, setSelectedTrip] = useState<Trip>();
  const actionItems = [
    {
      label: 'Delete',
      value: 'Delete',
    },
  ];

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
                <Loader text="Please wait..." />
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
    </TripListItemOuterContainer>
  );
};

export default TripList;
