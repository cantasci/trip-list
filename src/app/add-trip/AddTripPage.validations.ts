import * as Yup from 'yup';

import { NewTripModel } from './AddTripPage.types';

// eslint-disable-next-line import/prefer-default-export
export const addTripValidationSchema: Yup.SchemaOf<NewTripModel> = Yup.object({
  name: Yup.string().required('Required'),
  destination: Yup.string().required('Required'),
  start_date: Yup.date().required('Required'),
  end_date: Yup.date().required('Required'),
  image_url: Yup.string().required('Required'),
}).defined();
