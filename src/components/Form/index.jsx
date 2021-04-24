import React from 'react';
import { Formik } from 'formik';

export default ({
  children,
  initialValues,
  validationSchema,
  onSubmit
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <>{children}</>}
  </Formik>
);
