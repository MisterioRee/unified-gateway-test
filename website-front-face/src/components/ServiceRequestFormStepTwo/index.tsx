import React from 'react';
import {
  ButtonRow,
  FormInput,
  FormRow,
  FormSelect,
  TextArea,
} from './ServiceRequestFormStepTwo.styles';
import { SelectProps } from 'antd';
import Button from 'components/common/Button/Button';

const options: SelectProps['options'] = [
  {
    label: 'Example 1',
    value: '1',
  },
  {
    label: 'Example 2',
    value: '2',
  },
  {
    label: 'Example 3',
    value: '3',
  },
];

const ServiceRequestFormStepOne: React.FC = () => {
  return (
    <>
      <FormRow>
        <FormSelect options={options} placeholder="Payment Method" />
        <FormInput placeholder="Card Number" />
        <FormInput placeholder="CVV" />
      </FormRow>
      <FormRow>
        <FormSelect options={options} placeholder="City" />
        <FormInput placeholder="Country" />
        <FormInput placeholder="Zip Code" />
      </FormRow>
      <FormRow>
        <TextArea placeholder="Address" rows={2}></TextArea>
      </FormRow>
      <ButtonRow>
        <ButtonRow>
          <Button type="primary" height="50" htmlType="button" width="15">
            Confirm Payment
          </Button>
        </ButtonRow>
      </ButtonRow>
    </>
  );
};

export default ServiceRequestFormStepOne;
