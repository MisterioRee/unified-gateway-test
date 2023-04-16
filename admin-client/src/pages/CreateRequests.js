import React, { useState } from "react";
import { PaymentFrom, RequestFrom, Stepper, CircularLoadingBar } from "../components"; 
import axios from "axios";
import {REQUESTS_URL} from '../api/contrains';

import '../styles/pages.css';
import '../styles/createRequest.css';

const steps = ["Request", "Payment"];
 
export default function CreateRequests() {
  const [activeStep, setActiveStep] = useState(0);
  const [serviceRequestData, setData] = useState({});
  const [submittingRequestStatus, setSubmittingRequestStatus] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    console.log("Submitted", serviceRequestData);
    setSubmittingRequestStatus(true);
    axios.post(REQUESTS_URL, serviceRequestData).then((response) => { 
      setSubmittingRequestStatus(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }).catch(function (error) { 
      setSubmittingRequestStatus(false);
    });
  }

  //method to set serviceRequestData 
  const setServiceRequestData = (data) => {
    setData(data);
    handleNext();
  }

  return (
    <div className='container'>
      <Stepper activeStep={activeStep} steps={steps}>
        {submittingRequestStatus ? <CircularLoadingBar /> :
          activeStep === 0 ?
            (
              <RequestFrom setServiceRequestData={setServiceRequestData} activeStep={activeStep}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}   >
              </RequestFrom>
            ) : (
              <PaymentFrom
                activeStep={activeStep}
                steps={steps}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSubmit={handleSubmit} />
            )
        }
      </Stepper>
    </div>
  );
}