
export default function PaymentFrom({ activeStep, steps, handleNext, handleBack, handleSubmit }) {
    return (
        <>
            <div className="container p-0">
                <div className="card px-4">
                    <p className="h8 py-3">Payment Details</p>
                    <div className="col-12">
                        <div className="btn btn-primary mb-3">
                            <span className="ps-3">Amount AED-243</span>
                            <span className="fas fa-arrow-right"></span>
                        </div>
                    </div>
                    <div className="row gx-3">
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Person Name</p>
                                <input className="form-control mb-3" type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Card Number</p>
                                <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Expiry</p>
                                <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">CVV/CVC</p>
                                <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepped">
                {activeStep !== 0 &&
                    (<span onClick={handleBack}>Back</span>) 
                }
                {activeStep === steps.length - 1 ?
                    (<span onClick={handleSubmit}>Submit</span>) :
                    (<span onClick={handleNext}>Next</span>)
                }
            </div>
        </>
    );
}