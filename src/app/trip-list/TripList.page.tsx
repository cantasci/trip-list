import React, { FC, useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '~/common/components/button/Button';
import Loader from '~/common/components/loader/Loader';
import Page from '~/common/components/page/Page';
import Separator from '~/common/components/separator/Separator';
import { ActionItem } from '~/common/models/ActionItem';
import { Trip } from '~/common/models/Trip';
import { deleteTripById, getTrips } from '~/common/service/api';
import { PATHS } from '~/common/utils/constants';

import TripList from './TripList.components';

const TripListPage: FC = () => {
  const navigate = useNavigate();

  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const loadTrips = useCallback(async () => {
    setLoading(true);
    try {
      const trips = await getTrips();
      setTrips(trips);
    } catch (err) {
      // show error here
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTrips();
  }, [loadTrips]);

  const handleOnNewTrip = (): void => {
    navigate(PATHS.NewTrip);
  };

  const handleTripActionSelected = async (item: Trip, action: ActionItem): Promise<void> => {
    try {
      switch (action.value) {
        case 'Delete': {
          await deleteTripById(item.id);
          loadTrips();
          break;
        }
      }
    } finally {
      // do nothing
    }
  };

  return (
    <Page>
      <Button onClick={handleOnNewTrip} title="Add new trip" />
      <Separator />

      {isLoading ? (
        <Loader />
      ) : (
        <TripList items={trips} onActionSelected={handleTripActionSelected} />
      )}
    </Page>
  );
};

export default TripListPage;
