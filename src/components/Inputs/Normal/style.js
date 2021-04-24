import styled from 'styled-components';
import {
  getType,
  label,
  helperText,
  getBorderRadius
} from '../style';

export const Input = styled.input`
  ${getType};
  border-radius: ${getBorderRadius};
`;

export const Label = styled.div`
  ${label}
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;
export const Helper = styled.div`
  ${helperText}
`;
