import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 218px;
  height: 285px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  cursor: pointer;
  transition: transform .4s, box-shadow .4s;
  margin: 11px;

  &: hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
    transform: translate(-5px, -5px);
  }
  
  @media(max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Column = styled.div`
  padding: 14px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100px;
  align-self: center;
  -webkit-user-select: none;
  -webkit-user-drag: none;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 59.65%;
  bottom: 27.02%; 
  left: 0;
  box-sizing: border-box;
  padding: 14px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2C2C2C;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  background: #373737;
  border-radius: 5px; 
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  margin-left: 5px;
  padding: 5px;
  color: #ffff00;
`;

export const Description = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  word-break: break-all;
  position: absolute;
  top: 72%;
  left: 0;
  box-sizing: border-box;
  padding: 14px;
`;

export const Button = styled.div`
  width: 100%;
  height: 32px;
  background: #FFFF00;
  border-radius: 0px 0px 8px 8px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .4s;
  -webkit-user-select: none;
  -webkit-user-drag: none;

  &:hover {
    opacity: .7;
  }
`;

export const ButtonIcon = styled.img`
  height: 13px;
`;

export const ButtonText = styled.div`
  margin-left: 17px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: black;
  text-transform: uppercase;
`;