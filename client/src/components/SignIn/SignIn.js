import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const style = {
    h1:{
        fontSize: "1.2rem"
    },
    input:{
        margin: 10
    }
}

const SignIn = () => (
  <div>
    <h1 style={style.h1}>Sign in</h1>
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', city:'', state:'' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="firstName" placeholder="First name" style={style.input}  />
          <ErrorMessage name="firstName" component="div" />
          <Field type="text" name="lastName" placeholder="Last name" style={style.input} />
          <ErrorMessage name="lastName" component="div" />
          <Field type="email" name="email" placeholder="Email" style={style.input}  />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" style={style.input} />
          <ErrorMessage name="password" component="div" />
          <div>
          <button style={style.input} type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignIn;