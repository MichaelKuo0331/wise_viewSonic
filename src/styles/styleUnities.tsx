import styled from "styled-components";

// main容器樣式
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  gap: 10px;
`;

// 返回按鈕樣式
export const BackDiv = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 15px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    margin: 8px 0;
    gap: 5px;
  }
`;

export const BorderP = styled.p`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const BlueButton = styled.button`
  color: white;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  background-color: #007bff;
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

export const CancleIconDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TabButton = styled.button<{ active: boolean }>`
  width: 110px;
  height: 35px;
  background-color: ${({ active }) =>
    active ? "white" : "rgb(197, 196, 196)"};
  color: ${({ active }) => (active ? "#007bff" : "black")};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  z-index: ${({ active }) => (active ? 1 : 0)};

  &:hover {
    background-color: ${({ active }) => (active ? "white" : "darkgray")};
  }
`;

export const ActionButton = styled.button<{ type: string; name: string }>`
  width: 30px;
  height: 20px;
  border: none;
  border-radius: 5px;
  font-size: 0.7rem;
  color: white;
  cursor: ${({ name }) => (name === "Guest" ? "not-allowed" : "pointer")};

  background-color: ${({ type, name }) =>
    name === "Guest"
      ? "rgb(205, 205, 205)"
      : type === "minus"
      ? "#ff4d4d"
      : "#28a745"};

  &:hover {
    background-color: ${({ type, name }) =>
      name === "Guest"
        ? "rgb(205, 205, 205)"
        : type === "minus"
        ? "#ff3333"
        : "#218838"};
  }
  &:active {
    background-color: ${({ type, name }) =>
      name === "Guest"
        ? "rgb(205, 205, 205)"
        : type === "minus"
        ? "#cc3333"
        : "#1e7e34"};
  }
`;

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipText = styled.div<{ isVisible: boolean }>`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 1;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const SettingIconButton = styled.button`
  display: flex;
  align-items: center;
`;
