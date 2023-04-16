import { isValidEmail, isValidName, isObjEmpty, isValidLicenseNumber } from '../../helper/validations';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function RequestFrom({ setServiceRequestData }) {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});

    const [data, setData] = useState({
        name: "",
        email: "",
        licenseNumber: "",
        description: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

 
    const validateForm = () => {
        setValidated(true);
        const allErrors = {};

        if (!isValidName(name)) {
            allErrors.name = "Invalid name";
        }
        if (!isValidEmail(email)) {
            allErrors.email = "Invalid email address";
        }
        if (!isValidLicenseNumber(licenseNumber)) {
            allErrors.email = "Invalid email address";
        }

        if (!isObjEmpty(allErrors)) {
            setErrors(allErrors);
        } else {
            // setValidated(false);
            setServiceRequestData(data);
        }
    }


    const { name, email, licenseNumber, description } = data;

    return (
        <>
            <Form noValidate validated={validated}>
                <div className="container p-0">
                    <div className="card px-4">
                        <p className="h8 py-3">Construction Request</p>
                        <div className="row gx-3">
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Name</p>
                                    <Form.Control required className="form-control mb-3" pattern='/^[a-zA-Z ]+$/' onChange={handleChange} type="text" isValid={!!errors.name} value={name} name="name" placeholder="Name" />
                                    {errors.name && (<div className="invalid-feedback">
                                        {errors.name}
                                    </div>)}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Email</p>
                                    <Form.Control required className="form-control was-validated mb-3" pattern='/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i' onChange={handleChange} type="text" value={email} name="email" placeholder="example@email.com" />
                                    {errors.email && (<div className="invalid-feedback">
                                        {errors.email}
                                    </div>)}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">License Number</p>
                                    <Form.Control required className="form-control mb-3" pattern='/^[a-zA-Z0-9]+$/' onChange={handleChange} type="text" value={licenseNumber} name="licenseNumber" placeholder="123456789" />
                                    {errors.licenseNumber && (<div className="invalid-feedback">
                                        {errors.name}
                                    </div>)}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Description</p>
                                    <Form.Control as="textarea" className="form-control description mb-3 pt-2" pattern='/^[a-zA-Z0-9_]+$/' onChange={handleChange} value={description} name="description" type="textarea"
                                        placeholder="Type your message"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stepped">
                    <span onClick={validateForm}>Next</span>
                </div>
            </Form>
        </>
    );
}