import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const style = {
    h1: {
        fontSize: "1.2rem"
    },
    input: {
        margin: 10
    }
}

const InfoForm = () => (
    <div>
        <h1 style={style.h1}>Enter your information below</h1>
        <Formik
            initialValues={{ currentSalary: '', bonus: '', otherIncome: '' }}
            validate={values => {
                let errors = {};
                if (isNaN(values.bonus, values.currentSalary, values.otherIncome)) {
                    errors.bonus = "Please enter a number";
                    errors.currentSalary = "Please enter a number";
                    errors.otherIncome = "Please enter a number";
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
                    <ErrorMessage name="city" component="div" />
                    <Field type="text" name="city" placeholder="City" style={style.input} />
                    <ErrorMessage name="state" component="div" />
                    <Field type="text" name="state" placeholder="State" style={style.input} />
                    <ErrorMessage name="currentSalary" component="div" />
                    <Field type="text" name="currentSalary" placeholder="Current Salary $" style={style.input} />
                    <ErrorMessage name="bonus" component="div" />
                    <Field type="text" name="bonus" placeholder="Bonus $" style={style.input} />
                    <ErrorMessage name="otherIncome" component="div" />
                    <Field type="text" name="otherIncome" placeholder="Other $" style={style.input} />
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