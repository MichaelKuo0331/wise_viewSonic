// 右側區域樣式

import { styled } from "styled-components";

export const StundentCard = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: rgba(224, 220, 220, 0.48);
  padding: 10px 60px 20px 40px;
  margin: 10px;
  border-radius: 10px;
  gap: 10px;
`;

// 學生列表樣式
export const StudentsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StudentCard = styled.div`
  width: 80px;
  height: 50px;
  background-color: #eaf7ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
