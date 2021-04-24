import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100%;
  column-gap: 20px;
`;

export const Item = styled.div`
  flex: 50%;
  max-width: 50%;
  height: calc(100vh - 106px);
  border-radius: 14px;
  overflow: hidden;
  position: relative;
`;

Item.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

Item.Form = styled.div`
  background: #fff;
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 10px 0 20px;
`;
