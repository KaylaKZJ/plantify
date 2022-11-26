import moment from 'moment';
import React, { useEffect, useState } from 'react';
import plantsApi from '../../common/services/plant-service';
import { TPlantFormFields } from '../../common/types/states';
import {
  addPlantFormInitial,
  formFeedbackInitial,
} from '../../common/vars/formStates';
import { plantDropdownOptions } from '../../common/vars/dropdownOptions';
import styles from './AddPlantForm.module.scss';
import { nextWater } from '../../common/utils/watering';
import { createID } from '../../common/utils/lib';
import SubmitButton from '../Buttons/SubmitButton';
import { formUIUpdate } from '../../common/utils/forms';
import { useDispatch } from 'react-redux';
import { addPlant } from '../../common/store/plantSlice';

const AddPlantForm = () => {
  const [formFields, setFormFields] =
    useState<TPlantFormFields>(addPlantFormInitial);
  const [formFeedback, setFormFeedback] = useState(formFeedbackInitial);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const updateFormUI = (
    feedbackText: string,
    feedbackState?: 'error' | 'success',
    loadingState?: boolean
  ) => {
    formUIUpdate(
      setLoading,
      setFormFeedback,
      feedbackText,
      feedbackState,
      loadingState
    );
  };

  const preSubmitFields = () => {
    setFormFields({
      ...formFields,
      next_water: nextWater(formFields.type, formFields.last_watered),
      client_id: createID(formFields.name, 8),
    });
    console.log(formFields);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    preSubmitFields();
    dispatch(addPlant({ ...formFields }));

    plantsApi
      .addPlant({ ...formFields })
      .then((res) => {
        if (res?.status == 200) {
          updateFormUI(`${formFields.name} was added succesfully!`, 'success');
        } else {
          console.error(res);
          updateFormUI('Something went wrong, please try again later', 'error');
        }
      })
      .catch((e) => {
        console.error(e);
        updateFormUI('Something went wrong, please try again later', 'error');
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => submit(e)}>
        <fieldset>
          <label htmlFor='type'>Type Of Plant</label>
          <select
            id='type'
            placeholder='Type Of Plant'
            value={formFields.type}
            onChange={(e) => {
              console.log(e);
              setFormFields({ ...formFields, type: e.target.value });
            }}
            required
          >
            {plantDropdownOptions.map((plant) => (
              <option key={plant.text} value={plant.value}>
                {plant.text}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Name Of Plant</label>
          <input
            id='name'
            placeholder='Name of plant'
            value={formFields.name}
            onChange={(e) => {
              setFormFields({ ...formFields, name: e.target.value });
            }}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Plant Placement</label>
          <span>
            <input
              type='radio'
              id='indoor'
              name='position'
              value='indoor'
              checked={formFields.indoor}
              onChange={(e) =>
                setFormFields({ ...formFields, outdoor: false, indoor: true })
              }
            />
            <label htmlFor='indoor'>Indoor</label>
          </span>
          <span>
            <input
              type='radio'
              id='outdoor'
              name='position'
              value='outdoor'
              onChange={(e) =>
                setFormFields({ ...formFields, outdoor: true, indoor: false })
              }
              checked={formFields.outdoor}
            />
            <label htmlFor='outdoor'>Outdoor</label>
          </span>
        </fieldset>
        <fieldset>
          <label htmlFor='name'>Date Last Watered</label>
          <input
            type='date'
            onChange={(e) => {
              setFormFields({
                ...formFields,
                last_watered: moment(e.target.value).toISOString(),
              });
            }}
            required
          />
        </fieldset>
        <SubmitButton loading={loading} buttonText='Add Plant' />
      </form>
      <p
        className={
          formFeedback.state == 'success' ? 'text-green-600' : 'text-red-600'
        }
      >
        {formFeedback.text}
      </p>
    </div>
  );
};

export default AddPlantForm;
