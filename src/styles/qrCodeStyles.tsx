import styled from "styled-components";

export const QrCodeContainer = styled.div<{ show: boolean }>`
  flex: 4.5;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: rgba(224, 220, 220, 0.48);
  border-radius: 10px;
  width: 100%;
  display: ${({ show }) => (show ? "block" : "none")};
`;

export const QrCodeHeader = styled.div`
  padding: 10px 10px 0 30px;
  @media (max-width: 768px) {
    padding: 10px 10px 0 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px 0 10px;
  }
`;

export const QrCodeImgContainer = styled.div<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
  aspect-ratio: 1.1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  height: 40px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 2px;
  }
`;
