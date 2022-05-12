import { FC } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from '~/common/utils/constants';

import TripAddPage from './add-trip/AddTripPage.page';
import TripListPage from './trip-list/TripList.page';

const MainRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TripListPage />} path={PATHS.Trips} />

        <Route element={<TripAddPage />} path={PATHS.NewTrip} />

        <Route element={<Navigate to={PATHS.Trips} replace />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
