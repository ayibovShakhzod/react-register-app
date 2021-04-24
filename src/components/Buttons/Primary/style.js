import styled from 'styled-components';
import { fonts, buttons } from '../style';

export const Title = styled.span`
  ${fonts};
  color: white;
`;

export const Container = styled.button`
  ${buttons};
  background: rgba(241, 60, 40, 1);
  box-shadow: 0px 6px 12px rgba(241, 60, 40, 0.3);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:not(:disabled):focus {
    background: rgba(245, 60, 50, 1);
    box-shadow: 0px 6px 12px rgba(241, 60, 40, 0.42);
  };
  &:not(:disabled):hover {
    background: rgba(245, 60, 50, 1);
    box-shadow: 0px 6px 12px rgba(241, 60, 40, 0.42);
  };
  &:not(:disabled):active {
    background: rgba(245, 60, 50, 1);
    box-shadow: 0px 6px 12px rgba(241, 60, 40, 0.42);
  };
  &:disabled {
    background: rgba(244, 244, 244, 1);
    box-shadow: none;
    cursor: not-allowed;
  };
  &:disabled ${Title}{
    color: rgba(255, 255, 255, 1);;
  };
`;
