import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from '../../../components/useForm';
import * as employeeService from "../../../services/employeeService";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    lnmpDate: yup.date(),
    lnmpCertain: yup.boolean(),
    ultrasoundDate: yup.date(),
    bpd: yup.number(),
    hc: yup.number(),
    ac: yup.number(),
    fl: yup.number(),
    afi: yup.number(),
    placentaPosition: yup.string(),
    placentaConsistency: yup.string(),
    averageGestation: yup.string(),
    singleton: yup.boolean(),
    multipleGestations: yup.boolean(),
    intraUterinePregnancy: yup.boolean(),
  });

const initialValues = {
    lnmpDate: new Date(),
    lnmpCertain: false,
    ultrasoundDate: new Date(),
    bpd: 0,
    hc: 0,
    ac: 0,
    fl: 0,
    afi: 0,
    placentaPosition: '',
    placentaConsistency: '',
    averageGestation: '',
    singleton: false,
    multipleGestations: false,
    intraUterinePregnancy: false,
}

const booleanItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]

const GestationalProfile = () => {

    return (
        <Formik
            validationSchema={schema}
            onSubmit={() => console.log("Fired")}
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
                                label="Date of LNMP"
                            />
                            <Controls.RadioGroup
                                name="lnmpCertain"
                                label="Certain?"
                                items={booleanItems}
                            />
                        </Grid>

                    </Grid>

                    <Grid item xs={6}>
                            <h2>Ultrasound</h2>
                            <Controls.DatePicker
                                label="Date of Ultrsound"
                                name="ultrasoundDate"
                            />
                    </Grid>

                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Input
                                label="bpd"
                                name="BPD"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Input
                                label="hc"
                                name="HC"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Controls.Input
                                label="ac"
                                name="AC"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Controls.Input
                                label="fl"
                                name="FL"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Controls.Input
                                label="afi"
                                name="AFI"
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                            <h2>Placenta</h2>
                    </Grid>

                    <Grid>
                        <Controls.Input
                            label="Placenta Position"
                            name="placentaPosition"
                            multiline={true}
                        />

                        <Controls.Input
                            label="Placenta Consistency"
                            name="placentaConsistency"
                            multiline={true}
                        />
                    </Grid>

                    <Grid>
                        <h2>Gestation</h2>
                        <Controls.Input
                            label="Average Gestation"
                            name="averageGestation"
                            
                        />
                    </Grid>

                    <Grid container>
                        <Grid item xs={3}>
                        <Controls.RadioGroup
                                name="singleton"
                                label="Singleton?"
                                items={booleanItems}
                            />
                        </Grid>
                        <Grid item xs={3}>
                        <Controls.RadioGroup
                                name="multipleGestations"
                                label="Multiple Gestations?"
                                items={booleanItems}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <Controls.RadioGroup
                                name="intraUterinePregnancy"
                                label="Intra-Uterine Pregnancy?"
                                items={booleanItems}
                            />
                        </Grid>
                    </Grid>

                    <div>
                        <Controls.Button
                            text="Continue"
                            onClick={handleSubmit} />
                    </div>

                </Form>
            )}

        </Formik>
    )
}

export default GestationalProfile;
