import React from 'react';

import map_image from 'assets/images/map_image.jpg';
import {
  ButtonRow,
  ContactUsDescription,
  ContactUsForm,
  ContactUsHeading,
  Container,
  FormInput,
  FormRow,
  SpaceDiv,
  TextArea,
} from './ContactUs.styles';
import { PinPointIcon } from 'assets/icons';
import Button from 'components/common/Button/Button';
import Footer from 'components/common/footer';

const ContactUs: React.FC = () => {
  return (
    <>
      <Container image={map_image}>
        <div>
          <PinPointIcon />
        </div>
        <ContactUsForm>
          <ContactUsHeading>Contact us</ContactUsHeading>
          <ContactUsDescription>
            Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
            at nihil tantas platonem.
          </ContactUsDescription>
          <FormRow>
            <FormInput placeholder="Name" />
            <FormInput placeholder="Email" />
          </FormRow>
          <FormRow>
            <TextArea rows={5} placeholder="Message"></TextArea>
          </FormRow>
          <ButtonRow>
            <Button type="primary" size="large" width="22" height="50">
              Submit
            </Button>
          </ButtonRow>
        </ContactUsForm>
      </Container>
      <SpaceDiv />
      <Footer />
    </>
  );
};

export default ContactUs;
