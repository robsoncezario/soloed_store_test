import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 486px;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 36px;
  background-color: #ffff00;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: auto;
`;

export const Padding = styled.div`
  width: 100%;
  padding-left: 47px;
  padding-right: 47px;  
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media(max-width: 486px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 180px;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 33px;
  color: black;
`;

export const CloseButton = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .4s;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #ffff00;
  background: black;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

export const Column = styled.div`
  width: 100%;
  margin-top: 42px;
`;