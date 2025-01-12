import styled from "styled-components";

// main容器樣式
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

// 左側卡片樣式
export const QrCodeCard = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: rgba(224, 220, 220, 0.48);
  padding: 10px 60px 20px 40px;
  margin: 10px;
  border-radius: 10px;
  gap: 10px;
`;

// 返回按鈕樣式
export const Back = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

// QR Code 容器
export const QrCodeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 30px 10px 10px;
`;

// 底部版本樣式
export const Footer = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;

export const BorderP = styled.p`
  font-weight: bold;
`;

export const BlueButton = styled.button`
  color: white;
  border-radius: 5px;
  background-color: rgb(69, 129, 240);
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(69, 129, 240, 0.8);
  }

  &:active {
    background-color: rgba(69, 129, 240, 0.63);
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(172, 173, 175, 0.8);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const CancleIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translateX(45px);
`;
