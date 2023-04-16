import React, { useState } from 'react';
import {
  ServiceFormTabPane,
  ServiceFormTabs,
  ServiceRequestForm,
  ServiceRequestImage,
} from './ServiceRequest.styles';
import service_request_image from 'assets/images/service_request_image.jpg';
import ServiceRequestFormStepOne from 'components/ServiceRequestFormStepOne';
import ServiceRequestFormStepTwo from 'components/ServiceRequestFormStepTwo';
import PreFooter from 'components/PreFooter';
import Footer from 'components/common/footer';

const ServiceRequest: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('1');
  const tabItems = [
    {
      key: '1',
      label: 'Contact & Service Information',
      children: (
        <ServiceRequestFormStepOne
          moveNext={() => {
            setActiveKey('2');
          }}
        />
      ),
    },
    {
      key: '2',
      label: 'Payment Form',
      children: <ServiceRequestFormStepTwo />,
    },
  ];

  return (
    <>
      <ServiceRequestImage image={service_request_image}>
        Service Request
      </ServiceRequestImage>
      <ServiceRequestForm>
        <ServiceFormTabs
          centered
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
        >
          {tabItems.map((item) => (
            <ServiceFormTabPane key={item.key} tab={item.label}>
              {item.children}
            </ServiceFormTabPane>
          ))}
        </ServiceFormTabs>
      </ServiceRequestForm>
      <PreFooter />
      <Footer />
    </>
  );
};

export default ServiceRequest;
