"use client";

import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./NewsForm.module.css";

interface FormValues {
  email: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const NewsForm = () => {
  const initialValues: FormValues = {
    email: "",
  };

  const handleSubmit = (values: FormValues) => {
    // Handle form submission
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.news_form}>
        <div className={styles.form_control}>
          <Field type="email" name="email" placeholder="Email Address" />
          <div className={styles.error_message}>
            <ErrorMessage name="email" component="div" />
          </div>
        </div>
        <button type="submit">Subscribe Now</button>
      </Form>
    </Formik>
  );
};

export default NewsForm;
