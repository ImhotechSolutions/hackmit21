import React from 'react'

import { Grid, } from '@material-ui/core';
import Controls from "../../../components/controls/Controls";
import { Form } from '../../../components/useForm';
import * as patientService from "../../../services/patientService";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    estimatedDateOfDelivery: yup.date(),
    methodOfEstimatedDateOfDelivery: yup.string().oneOf(["sonar", "sf", "LNMP", "lnmp"])
  });

const initialValues = {
    estimatedDateOfDelivery: new Date(),
    methodOfEstimatedDateOfDelivery: ""
}

const methodofEDDItems = [
    { id: 'sonar', title: 'Sonar'},
    { id: 'sf', title: 'SF'},
    { id: 'lnmp', title: 'LNMP'}
]

const EstimatedDateOfDelivery = ({onBackClick}) => {
    return (
        <Formik 
            validationSchema={schema}
            onSubmit={(values) => console.log(values)}
            initialValues = {initialValues}
        >

            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <h1>Estimated Date of Delivery</h1>

                    <Grid>
                        <Controls.DatePicker
                            name="estimatedDateOfDelivery"
                            label="Estimated Date of Delivery"
                            value={values.estimatedDateOfDelivery}
                            onChange={handleChange}
                        />
                        <Controls.RadioGroup
                            name="methodOfEstimatedDateOfDelivery"
                            label="Method of Estimated Date of Delivery?"
                            items={methodofEDDItems}
                            value={values.methodOfEstimatedDateOfDelivery}
                            onChange={handleChange}
                        />
                    </Grid>

                    <div>
                        <Controls.Button
                            text="Back"
                            onClick={onBackClick}
                            color="default"
                        />
                        
                        <Controls.Button
                            text="Submit and Continue"
                            onClick={handleSubmit} 
                        />
                    </div>
                </Form>
            
            )}

        </Formik>
    )
}

export default EstimatedDateOfDelivery

