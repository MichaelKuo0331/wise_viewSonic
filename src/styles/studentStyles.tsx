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
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 20px 30px 20px 30px;
  transform: translateY(-28px);
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2);
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

export const StudentCardNumber = styled.div`
  width: 100%;
  text-align: center;
  background-color: #007bff;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 5px 0;
`;

export const StudentCardName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0;
  color: #333;
  text-align: center;
`;

export const StudentCardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #007bff;
  padding: 2px 4px 5px 4px;
`;
