import { css } from 'styled-components';

export const getFontSize = ({ size }) => {
  switch (size) {
  case ('large' || 'Large'): return '14px';
  case ('medium' || 'Medium'): return '13px';
  case ('small' || 'Small'): return '12px';
  default: return '13px';
  }
};

export const getLabelPadding = ({ size }) => {
  switch (size) {
  case ('large' || 'Large'): return '25px';
  case ('medium' || 'Medium'): return '17px';
  case ('small' || 'Small'): return '12px';
  default: return '17px';
  }
};

export const getHeight = ({ size }) => {
  switch (size) {
  case ('large' || 'Large'): return '46px';
  case ('medium' || 'Medium'): return '35px';
  case ('small' || 'Small'): return '27px';
  default: return '35px';
  }
};
export const getPadding = ({ size }) => {
  switch (size) {
  case ('large' || 'Large'): return '0 20px';
  case ('medium' || 'Medium'): return '0 17px';
  case ('small' || 'Small'): return '0 12px';
  default: return '0 17px';
  }
};

export const getIconPadding = ({ size }) => {
  switch (size) {
  case ('large' || 'Large'): return '0 16px';
  case ('medium' || 'Medium'): return '0 13px';
  case ('small' || 'Small'): return '0 9px';
  default: return '11px 13px';
  }
};
export const getColor = ({ type }) => {
  switch (type) {
  case ('error' || 'Error'): return 'rgba(246, 81, 96, 1)';
  case ('success' || 'Success'): return 'rgba(0, 208, 151, 1)';
  default: return 'rgba(40, 43, 44, 1)';
  }
};

export const getBorderRadius = ({ size }) => `${['small', 'Small'].includes(size) ? '8px' : '14px'}`;

export const inputs = css`
  border: none;
  padding: ${getPadding};
  height: ${getHeight};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  width:100%;
`;

export const fonts = css`
  font-weight: var(--font-bold);
  font-size: ${getFontSize};
  margin-bottom: 8px;
`;

export const error = css`
  ${inputs};
  ${fonts};
  background: rgba(246, 81, 96, 0.1);
  border: 1px solid rgba(246, 81, 96, 0.5);
  color: rgba(246, 81, 96, 1);
  box-sizing: border-box;
  &:focus{
    outline: none;
    background: white;
    border: 1px solid rgba(246, 81, 96, 0.5);
  }
  &:not(:focus)&:not(:disabled):hover {
      color: rgba(246, 81, 96, 1);
      background: rgba(246, 81, 96, 0.1);
    };
    &::placeholder{
      color: rgba(246, 81, 96, 0.5);
    }
`;

export const success = css`
  ${inputs};
  ${fonts};

box-sizing: border-box;
background: rgba(0, 208, 151, 0.1);
border: 1px solid rgba(0, 208, 151, 0.5);
color: rgba(0, 208, 151, 1);
&:focus{
  border: none;
color: rgba(0, 208, 151, 1);
  background: white;
border: 1px solid rgba(0, 208, 151, 0.5);
  outline: none;
}
&:not(:focus)&:not(:disabled):hover {
    color: rgba(0, 208, 151, 1);
    background: rgba(0, 208, 151, 0.1);
  };
  &::placeholder{
    color: rgba(0, 208, 151, 0.7);
  }
`;

export const normal = css`
  ${inputs};
  ${fonts};
  max-height: ${getHeight};
  box-sizing: border-box;
  border: 1px solid rgba(200, 200, 200, 1);
  background: #FFF;
  font-weight: var(--font-regular);
  &::placeholder {
    color: rgba(125, 133, 146, 1);
  }
  color: #282b2c;
  .left-right{
    display: none;
  }
  &:focus {
    outline: none;
    color: #282b2c;
  }
  &:not(:disabled):focus {
    color: #282b2c;
    border: 1px solid rgba(40,43,44,1);
  };
  &:not(:focus)&:not(:disabled):hover {
    color: #282b2c;
    background: #f4f4f4;
  };
  &:not(:disabled):active {
    color: #282b2c;
  };
  &:active{
    color: #282b2c;
  }
  &:disabled {
    color:   #3e3f3f;
    cursor: not-allowed;
    &::placeholder{
      color: rgba(206, 213, 224, 1);
    }
  };
`;

export const getType = ({ type }) => {
  switch (type) {
  case ('error' || 'Error'): return error;
  case ('success' || 'Success'): return success;
  default: return normal;
  }
};

export const getPwd = ({ typePwd }) => {
  switch (typePwd) {
  case ('error' || 'Error'): return error;
  case ('success' || 'Success'): return success;
  default: return normal;
  }
};

export const helperText = css`
  ${fonts}
  color: ${getColor};
  margin-left: ${getLabelPadding};
`;

export const label = css`
  ${fonts}
  margin-left: 6px;
  color: ${({ disabled }) => (disabled ? '#bababa' : getColor)};
`;
