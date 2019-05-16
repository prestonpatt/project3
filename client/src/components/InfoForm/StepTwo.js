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
    zipCode: yup.string().required().max(5).min(5),
    currentSalary: yup.number().required(),
    bonus: yup.number().required(),
    otherIncome: yup.number()
});

class StepTwo extends React.Component {
    render() {
        return (
            <Formik onSubmit={this.props.onSubmit} validationSchema={userSchema}>{() => (
                <Form>
                    <ErrorMessage name="zipCode" component="div" />
                    <Field type="number" name="zipCode" placeholder="Zip Code" style={style.input} />
                    <ErrorMessage name="currentSalary" component="div" />
                    <Field type="number" name="currentSalary" placeholder="Current Salary $" style={style.input} />
                    <ErrorMessage name="bonus" component="div" />
                    <Field type="number" name="bonus" placeholder="Bonus $" style={style.input} />
                    <ErrorMessage name="otherIncome" component="div" />
                    <Field type="number" name="otherIncome" placeholder="Other Income" style={style.input} />
                    <button type="submit">Submit</button>
                </Form>
            )}</Formik>
        )
    }
}
export default StepTwo;