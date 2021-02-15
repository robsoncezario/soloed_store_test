import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 45px;
  background: #000000;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px;
  cursor: pointer;
  transition: opacity .4s;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover {
    opacity: .7;
  }
`;

export const Icon = styled.img`
  width: 19px;
`;

export const Count = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #ffff00;
`;


