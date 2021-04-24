import React from 'react';
import { useFormikContext } from 'formik';
import { NormalInput } from '../../Inputs';

export default ({ name, ...otherProps }) => {
  const {
    touched,
    errors,
    values,
    setFieldValue
    // handleBlur
  } = useFormikContext();
  return (
    <NormalInput
      // onFocus={handleBlur(name)}
      type={touched[name] && errors[name] && 'error'}
      helperText={
        touched[name] && errors[name] && errors[name]
      }
      value={values[name]}
      onChange={e => setFieldValue(name, e.target.value)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
};
