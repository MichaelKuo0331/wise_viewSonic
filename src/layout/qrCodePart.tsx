import React from "react";
import CancleIcon from "../icons/CancleIcon";
import CopyIcon from "../icons/CopyIcon";
import { Footer, QrCodeCard, QrCodeContainer } from "../styles/QrCodeStyles";
import {
  Back,
  BlueButton,
  BorderP,
  CancleIconContainer,
  FlexDiv,
} from "../styles/styleUnities";

const QrCodePart: React.FC = () => {
  return (
    <QrCodeCard>
      <CancleIconContainer>
        <CancleIcon />
      </CancleIconContainer>
      <Back>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
        Back to Class List
      </Back>
      <BorderP>Join 302 Science</BorderP>
      <FlexDiv>
        <BorderP>ID: X58E9647</BorderP>
        <BlueButton>
          <CopyIcon />
        </BlueButton>
        &emsp;
        <BorderP>Link</BorderP>
        <BlueButton>
          <CopyIcon />
        </BlueButton>
      </FlexDiv>
      <QrCodeContainer>QR Code</QrCodeContainer>
      <Footer>Version 1.1.7</Footer>
    </QrCodeCard>
  );
};

export default QrCodePart;
