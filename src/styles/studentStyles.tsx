// 右側區域樣式

import { styled } from "styled-components";

export const StundentDiv = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const StundentDivShow = styled(StundentDiv)<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const StudentHeader = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: rgba(224, 220, 220, 0.48);
  padding: 10px 10px 10px 30px;
`;

// 學生列表
export const StudentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 30px 30px 20px 30px;
  transform: translateY(-28px);
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2);
  max-height: 85%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 3px solid transparent;
    box-shadow: 0 0 0 3px white;
  }

  &::-webkit-scrollbar-track {
    margin: 25px 30px 20px 0;
  }
`;

// 學生卡片
export const StudentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`;

export const StudentCardNumber = styled.div<{ name: string }>`
  width: 100%;
  text-align: center;
  background-color: ${({ name }) =>
    name === "Guest" ? "rgb(205, 205, 205)" : "#007bff"};
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 5px 0;
`;

export const StudentCardName = styled.div<{ name: string }>`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 10px 0;
  color: ${({ name }) => (name === "Guest" ? "rgb(205, 205, 205)" : "#333")};
  text-align: center;
`;

export const StudentCardAction = styled.div<{ name: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: ${({ name }) =>
    name === "Guest" ? "1px solid rgb(205, 205, 205)" : "1px solid #ccc"};
  padding: 2px 4px 5px 4px;
`;

export const StudentCardScore = styled.span<{ name: string }>`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ name }) => (name === "Guest" ? "rgb(205, 205, 205)" : "#333")};
`;
