import React from 'react';
import { useFormikContext } from 'formik';

import { PrimaryButton } from '../../Buttons';

export default ({ ...otherProps }) => {
  const { isSubmitting, handleSubmit } = useFormikContext();
  return (
    <PrimaryButton
      disabled={isSubmitting}
      onClick={handleSubmit}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
};
