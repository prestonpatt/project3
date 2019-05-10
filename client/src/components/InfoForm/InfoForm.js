import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const InfoForm = () => (
  <div>
    <h1>Enter email and password to sign in</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
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
          <Field type="email" name="email" placeholder="email"  />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />
          <div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default InfoForm;