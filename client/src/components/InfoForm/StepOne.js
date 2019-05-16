import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
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
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .max(20)
    .min(8)
});

class StepOne extends React.Component {
  render() {
    return (
      <Formik  onSubmit={this.props.onSubmit} validationSchema={userSchema}>{() => (
        <Form>
        <ErrorMessage name="firstName" component="div" />
        <Field type="text" name="firstName" placeholder="firstName" style={style.input} />
        <ErrorMessage name="lastName" component="div" />
        <Field type="text" name="lastName" placeholder="lastName" style={style.input} />
        <ErrorMessage name="email" component="div" />
        <Field type="email" name="email" placeholder="email" style={style.input} />
        <ErrorMessage name="password" component="div" />
        <Field type="password" name="password" placeholder="password" style={style.input} />
        <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    )
  }
}
export default StepOne;