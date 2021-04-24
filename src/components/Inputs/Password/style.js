import styled from 'styled-components';
import {
  getPwd,
  getBorderRadius,
  helperText,
  getHeight,
  label
} from '../style';
import { ReactComponent as Eye } from '../../../assets/icon/eye.svg';

export const Label = styled.div`
  ${label}
`;

export const Input = styled.input`
  ${getPwd}
  padding-right: 23px;
  border-radius: ${getBorderRadius};
`;
export const Helper = styled.div`
  ${helperText}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 8px;
`;

export const IconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
`;
export const EyeIcon = styled(Eye)`
  display: ${({ eye }) => {
    // eslint-disable-next-line no-unused-expressions
    eye ? 'flex' : 'none';
  }};
  position: absolute;
  padding-right: 14px;
  margin-left: 5px;
  cursor: pointer;
  height: ${getHeight};
  width: ${getHeight};
  top: 50%;
  transform: translate(0, calc(-50% - 4px));
  & path {
    fill: rgba(${({ seen }) => (seen ? '125, 133, 146' : '40,43,44')}, 1);
  }
`;
