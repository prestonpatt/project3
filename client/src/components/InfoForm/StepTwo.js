import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';

const style = {
    h1: {
        fontSize: "1.2rem"
    },
    input: {
        margin: 10
    }
}

class StepTwo extends React.Component {
    render() {
        return (
            <Formik  onSubmit={this.props.onSubmit}>{() => (
                    <Form>
                        <ErrorMessage name="city" component="div" />
                        <Field type="text" name="city" placeholder="City" style={style.input} />
                        <ErrorMessage name="state" component="div" />
                        <Field type="text" name="state" placeholder="State" style={style.input} />
                        <ErrorMessage name="currentSalary" component="div" />
                        <Field type="text" name="currentSalary" placeholder="Current Salary $" style={style.input} />
                        <ErrorMessage name="bonus" component="div" />
                        <Field type="text" name="bonus" placeholder="Bonus $" style={style.input} />
                        <ErrorMessage name="otherIncome" component="div" />
                        <Field type="text" name="otherIncome" placeholder="Other Income" style={style.input} />
                        <button>Submit</button>
                    </Form>
            )}</Formik>
        )
    }
}
export default StepTwo;