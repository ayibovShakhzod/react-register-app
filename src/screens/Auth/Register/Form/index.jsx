import React from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import PrimaryButton from '../../../../components/FormikElements/PrimaryButton';
import Formik from '../../../../components/Form';
import NormalInput from '../../../../components/FormikElements/NormalInput';
import PasswordInput from '../../../../components/FormikElements/PasswordInput';
import { Form } from './style';

export default () => {
  const history = useHistory();
  const formikSetting = {
    initialValues: {
      name: '',
      email: '',
      password: '',
      prePassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name field is required')
        .trim()
        .min(2, 'Min value 2.')
        .max(25, 'Max value 25'),
      email: Yup.string()
        .required('Email field is required')
        .email('Invalid email address'),
      password: Yup.string().required(
        'Password field is required'
      ),
      prePassword: Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          'Passwords must match'
        )
        .required('Pre password field is required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      localStorage.setItem('user', JSON.stringify(values));
      history.push('/');
      setSubmitting(false);
    }
  };
  return (
    <Form>
      <Formik
        initialValues={formikSetting.initialValues}
        validationSchema={formikSetting.validationSchema}
        onSubmit={formikSetting.onSubmit}
      >
        <NormalInput
          size='large'
          label='Your name'
          name='name'
        />
        <NormalInput
          size='large'
          label='Email'
          name='email'
        />
        <PasswordInput
          eye
          size='large'
          label='Password'
          name='password'
        />
        <PasswordInput
          eye
          size='large'
          label='Confirm Password'
          name='prePassword'
        />
        <PrimaryButton
          title='REGISTER'
          type='submit'
          size='large'
          style={{ width: '60%', marginTop: '25px' }}
        />
      </Formik>
    </Form>
  );
};
