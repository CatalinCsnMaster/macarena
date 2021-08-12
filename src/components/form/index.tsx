/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { tw } from 'twind';
import * as Yup from 'yup';
import 'yup-phone';
import Button from '../button';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  firstName: Yup.string().min(6, `Too Short! Minimum of 6 letters`).max(50, `Too Long!`).required(`Required`),
  lastName: Yup.string().min(6, `Too Short!  Minimum of 6 letters`).max(50, `Too Long!`).required(`Required`),
  phoneNumber: Yup.string().phone(``, false, `Enter a valid phone number!`).required(`Required`),
  companyName: Yup.string().min(6, `Too Short!  Minimum of 6 letters`).max(50, `Too Long!`).required(`Required`),
  message: Yup.string().min(6, `Too Short!  Minimum of 6 letters`).max(50, `Too Long!`).required(`Required`),
  email: Yup.string().email(`Invalid email`).required(`Required`),
});

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

const classes = {
  formInput: tw(`my-2 border-2 border-opacity-10 border-black rounded`),
};

const PForm = () => (
  <div>
    <div className={tw(`max-w-sm mx-auto pb-10 text-center`)}>
      <h1 className={tw(`text-4xl font-bold`)}>Contact us</h1>
      <p>Contact us if you have any questions about our company or products.</p>
    </div>

    <Formik
      initialValues={{
        firstName: ``,
        lastName: ``,
        email: ``,
        phoneNumber: ``,
        companyName: ``,
        message: ``,
        terms: ``,
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ errors, touched }) => (
        <Form className={tw(`max-w-lg flex flex-col mx-auto p-10 justify-between`)}>
          <label htmlFor="email">Email*</label>
          <Field id="email" name="email" placeholder="" type="email" className={classes.formInput} />
          <p className={tw(`text-red-500`)}>{touched.email && errors.email && <div>{errors.email}</div>}</p>

          <label htmlFor="firstName">First Name*</label>
          <Field id="firstName" name="firstName" placeholder="" className={classes.formInput} />
          <p className={tw(`text-red-500`)}>{touched.firstName && errors.firstName && <div>{errors.firstName}</div>}</p>

          <label htmlFor="lastName">Last Name*</label>
          <Field id="lastName" name="lastName" placeholder="" className={classes.formInput} />
          <p className={tw(`text-red-500`)}>{touched.lastName && errors.lastName && <div>{errors.lastName}</div>}</p>

          <label htmlFor="phoneNumber">Phone Number*</label>
          <Field id="phoneNumber" name="phoneNumber" placeholder="" className={classes.formInput} />
          <p className={tw(`text-red-500`)}>
            {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}
          </p>

          <label htmlFor="companyName">Company Name*</label>
          <Field id="companyName" name="companyName" placeholder="" className={classes.formInput} />
          <p className={tw(`text-red-500`)}>
            {touched.companyName && errors.companyName && <div>{errors.companyName}</div>}
          </p>

          <label htmlFor="message">Message</label>
          <Field id="message" name="message" placeholder="" type="textarea" className={classes.formInput} />
          <p className={tw(`text-red-500`)}>{touched.message && errors.message && <div>{errors.message}</div>}</p>

          <span>
            <Field id="terms" name="terms" placeholder="" type="checkbox" className={classes.formInput} />
            <label htmlFor="terms">{` `} I agree to receive email communications from Papionne</label>
          </span>

          <div className={tw(`mx-auto`)}>
            <Button primary modifier="mt-6 m" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default PForm;
