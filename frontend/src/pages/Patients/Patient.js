import React from 'react'
import GestationalProfile from "./PatientForms/GestationalProfile";
import EstimatedDateOfDelivery from './PatientForms/EstimatedDateOfDelivery';
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    formContent: {
        marginBottom: theme.spacing(5),

    }
}))

const Patient = () => {
    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="Patient Antenatal Profile"
                subTitle="Editing Profile"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <h1>Gestational Profile</h1>
                <GestationalProfile/>
            </Paper>

            <Paper className={classes.pageContent}>
                <h1>Estimated Date of Delivery</h1>
                <EstimatedDateOfDelivery />
            </Paper>
        </>
    )
}

export default Patient;
