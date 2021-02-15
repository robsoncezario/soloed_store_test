import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  background: #FFFFFF;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
  transition: box-shadow .4s;

  &: hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  }
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
`;

export const Name = styled.div`
  width: 113px;
  margin-right: 10px;
  margin-left: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #2C2C2C;
`;

export const Price = styled.div`
  margin-left: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: black;
  width: 62px;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  & .label {
    font-style: normal;
    font-weight: normal;
    font-size: 5px;
    line-height: 6px;
    color: black;
  }
`;

export const Counter = styled.div`
  box-sizing: border-box;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;

  & .item:nth-child(2) {
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    pointer-events: none;
  }

  & .item {
    width: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: black;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s;
  }

  & .item:active {
    transform: scale(.4);
  }
`;

export const RemoveButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .4s;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  color: #ffff00;
  background: black;
  cursor: pointer;
  transform: translate(50%, -50%);

  &:hover {
    opacity: .7;
  }
`;