import React from 'react';
import {
  ButtonRow,
  FormInput,
  FormRow,
  TextArea,
} from './ServiceRequestFormStepOne.styles';
import Button from 'components/common/Button/Button';

const ServiceRequestFormStepOne: React.FC<{ moveNext: () => void }> = ({
  moveNext,
}) => {
  return (
    <>
      <FormRow>
        <FormInput placeholder="Name" />

        <FormInput placeholder="Email" />
        <FormInput placeholder="Phone" />
      </FormRow>
      <FormRow>
        <TextArea placeholder="Service Details" rows={8}></TextArea>
      </FormRow>
      <ButtonRow>
        <Button
          type="primary"
          width="15"
          height="50"
          onClick={moveNext}
          htmlType="button"
        >
          Next
        </Button>
      </ButtonRow>
    </>
  );
};

export default ServiceRequestFormStepOne;
