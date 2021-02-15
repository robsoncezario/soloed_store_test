import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 101px;
  background-color: #FFFF00;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 67px;
  padding-right: 67px;
  flex-shrink: 0;

  @media(max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  z-index: 1;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Subtitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 15px;
  margin-left: 4px;
  color: black;
  text-transform: lowercase;
`;

export const Logo = styled.img`
  width: 117px;
  height: 31px;
`;
