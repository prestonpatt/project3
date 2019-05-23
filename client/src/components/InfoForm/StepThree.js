import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from "yup";

const style = {
    h1: {
        fontSize: "1.2rem"
    },
    input: {
        margin: 10
    }
}

const userSchema = yup.object().shape({
    newZipcode: yup.number().required(),
    newCurrentSalary: yup.number().required(),
    newBonus: yup.number().required(),
    newOtherIncome: yup.number().required()
});

class StepThree extends React.Component {
    render() {
        return (
            <Formik onSubmit={this.props.onSubmit} validationSchema={userSchema}>{() => (
                <Form>
                    <ErrorMessage name="newZipcode" component="div" />
                    <Field type="number" name="newZipcode" placeholder="New ZIP Code" style={style.input} />
                    <ErrorMessage name="newCurrentSalary" component="div" />
                    <Field type="number" name="newCurrentSalary" placeholder="New Salary $" style={style.input} />
                    <ErrorMessage name="newBonus" component="div" />
                    <Field type="number" name="newBonus" placeholder="New Bonus $" style={style.input} />
                    <ErrorMessage name="newOtherIncome" component="div" />
                    <Field type="number" name="newOtherIncome" placeholder="New Additional Income $" style={style.input} />
                    <button type="submit">Submit</button>
                </Form>
            )}</Formik>
        )
    }
}
export default StepThree;