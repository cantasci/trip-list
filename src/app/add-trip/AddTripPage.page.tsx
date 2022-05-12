import { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '~/common/components/button/Button';
import InputField from '~/common/components/input-field/InputField';
import Loader from '~/common/components/loader/Loader';
import Page from '~/common/components/page/Page';
import Separator from '~/common/components/separator/Separator';
import { createNewTrip } from '~/common/service/api';
import { PATHS } from '~/common/utils/constants';
import FormController from '~/common/utils/controller.utils';
import { formatDate } from '~/common/utils/date.utils';

import { NewTripModel } from './AddTripPage.types';
import { addTripValidationSchema } from './AddTripPage.validations';

const AddTripPage: FC = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState, errors } = useForm<NewTripModel>({
    resolver: yupResolver(addTripValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
  });

  const goToList = (): void => navigate(PATHS.Trips);

  const onSubmit = async (data: NewTripModel): Promise<void> => {
    try {
      await createNewTrip({
        ...data,
        start_date: formatDate(data.start_date),
        end_date: formatDate(data.end_date),
        // TODO: Due to there is no server to upload local document, image url was sent fake value.
        image_url:
          'https://upload.wikimedia.org/wikipedia/commons/4/48/Open%27er_Festival_%282.07.2009_14%29.jpg',
      });
    } finally {
      goToList();
    }
  };

  return (
    <Page>
      <Page.Actions>
        <Button onClick={() => handleSubmit(onSubmit)()} title="Save trip" />
        <Separator />
        <Button onClick={goToList} title="Reset" type="reset" />
      </Page.Actions>
      <Page.Content>
        <Separator times={3} />

        <FormController control={control} defaultValue="" name="name">
          <InputField error={errors.name?.message || ''} name="name" title="Trip Name" />
        </FormController>

        <FormController control={control} defaultValue="" name="destination">
          <InputField
            error={errors.destination?.message || ''}
            name="destination"
            title="Trip Destination"
          />
        </FormController>

        <FormController control={control} defaultValue={new Date()} name="start_date">
          <InputField
            error={errors.start_date?.message || ''}
            name="start_date"
            title="Start Date"
            type="date"
          />
        </FormController>

        <FormController control={control} defaultValue={new Date()} name="end_date">
          <InputField
            error={errors.end_date?.message || ''}
            name="end_date"
            title="End Date"
            type="date"
          />
        </FormController>

        <FormController control={control} defaultValue="" name="image_url">
          <InputField
            error={errors.image_url?.message || ''}
            name="image_url"
            title="Image Url"
            type="file"
          />
        </FormController>
        <Separator />

        {formState.isSubmitting ? <Loader /> : null}
      </Page.Content>
    </Page>
  );
};

export default AddTripPage;
