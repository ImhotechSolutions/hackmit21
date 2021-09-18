import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from '../../../components/useForm';
import * as patientService from "../../../services/patientService";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    lnmpDate: yup.date(),
    lnmpCertain: yup.string(),
    ultrasoundDate: yup.date(),
    bpd: yup.number(),
    hc: yup.number(),
    ac: yup.number(),
    fl: yup.number(),
    afi: yup.number(),
    placentaPosition: yup.string(),
    placentaConsistency: yup.string(),
    averageGestation: yup.string(),
    singleton: yup.string(),
    multipleGestations: yup.string(),
    intraUterinePregnancy: yup.string(),
  });

const initialValues = {
    lnmpDate: new Date(),
    lnmpCertain: '',
    ultrasoundDate: new Date(),
    bpd: 0,
    hc: 0,
    ac: 0,
    fl: 0,
    afi: 0,
    placentaPosition: '',
    placentaConsistency: '',
    averageGestation: '',
    singleton: '',
    multipleGestations: '',
    intraUterinePregnancy: '',
}

const booleanItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]

const GestationalProfile = () => {

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => patientService.insertPatient(values)}
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
                    <Grid container>
                        <Grid item xs={6}>
                            <h2>Last Normal Menstrual Period</h2>
                            <Controls.DatePicker
                                name="lnmpDate"
                                label="Date of Last Normal Menstrual Period"
                                value={values.lnmpDate}
                                onChange={handleChange}
                            />
                            <Controls.RadioGroup
                                name="lnmpCertain"
                                label="Certain?"
                                items={booleanItems}
                                value={values.lnmpCertain}
                                onChange={handleChange}
                            />
                        </Grid>

                    </Grid>

                    <Grid item xs={6}>
                            <h2>Ultrasound</h2>
                            <Controls.DatePicker
                                name="ultrasoundDate"
                                label="Date of Ultrsound"
                                value={values.ultrasoundDate}
                                onChange={handleChange}
                            />
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Input
                                name="bpd"
                                label="Biparietal Diameter (mm)"
                                value={values.bpd}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Input
                                name="hc"
                                label="Head Circumfrence"
                                value={values.hc}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Controls.Input
                                name="ac"
                                label="Abdominal Circumference"
                                value={values.ac}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Controls.Input
                                name="fl"
                                label="Femur Length"
                                value={values.fl}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Controls.Input
                                name="afi"
                                label="Amniotic Fluid Index"
                                value={values.afi}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid>
                        <h2>Placenta</h2>

                        <Controls.Input
                            name="placentaPosition"
                            label="Placenta Position"
                            multiline={true}
                            value={values.placentaPosition}
                            onChange={handleChange}
                        />

                        <Controls.Input
                            name="placentaConsistency"
                            label="Placenta Consistency"
                            multiline={true}
                            value={values.placentaConsistency}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid>
                        <h2>Gestation</h2>
                        <Controls.Input
                            name="averageGestation"
                            label="Average Gestation"
                            value={values.averageGestation}
                            onChange={handleChange}
                        />

                        <Grid container>
                            <Grid item xs={3}>
                            <Controls.RadioGroup
                                    name="singleton"
                                    label="Singleton?"
                                    items={booleanItems}
                                    value={values.singleton}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={3}>
                            <Controls.RadioGroup
                                    name="multipleGestations"
                                    label="Multiple Gestations?"
                                    items={booleanItems}
                                    value={values.multipleGestations}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            <Controls.RadioGroup
                                    name="intraUterinePregnancy"
                                    label="Intra-Uterine Pregnancy?"
                                    items={booleanItems}
                                    value={values.intraUterinePregnancy}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <div>
                        <Controls.Button
                            text="Submit and Continue"
                            onClick={handleSubmit} />
                    </div>

                </Form>
            )}

        </Formik>
    )
}

export default GestationalProfile;
