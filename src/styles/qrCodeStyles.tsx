import styled from "styled-components";

export const QrCodeDiv = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: rgba(224, 220, 220, 0.48);
  border-radius: 10px;
  padding: 10px 10px 10px 30px;
`;

export const QrCodeDivShow = styled(QrCodeDiv)<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  height: 80%;
  margin-left: 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
  height: 40px;
`;
