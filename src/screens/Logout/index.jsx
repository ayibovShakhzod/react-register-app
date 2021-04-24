import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem('user');
    history.push('/');
  }, []);
  return <>Logout</>;
};
