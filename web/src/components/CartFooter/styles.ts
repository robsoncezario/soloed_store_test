import styled from 'styled-components';

export const Container = styled.div`
  margin-top: auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 70px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-left: 47px;
  padding-right: 47px;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 15px;
`;

export const Button = styled.div`
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 15px;
  color: #ffff00;
  background-color: black;
  margin-top: 42px;
  cursor: pointer;
`;