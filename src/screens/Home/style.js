import styled from 'styled-components';
import { ReactComponent as arrowRight } from '../../assets/icon/arrowRight.svg';

export const Container = styled.div`
  width: 100%;
  padding: 60px 10px;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 6rem;
  font-weight: bold;
  margin: 50px 0;
`;

export const ArrowRightIcon = styled(arrowRight)`
  path {
    fill: #fff;
  }
`;

export const Info = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  margin-right: 1.3rem;
`;

Info.Label = styled.div`
  display: inline;
`;

Info.Text = styled.div`
  display: inline;
  color: rgba(241, 60, 40, 1);
  font-weight: bold;
`;
export const Name = styled.b`
  color: rgba(241, 60, 40, 1);
`;
