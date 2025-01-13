import { useState } from "react";
import BackIcon from "../icons/BackIcon";
import CancleIcon from "../icons/CancleIcon";
import CopyIcon from "../icons/CopyIcon";
import { Footer, QrCodeContainer, QrCodeDivShow } from "../styles/QrCodeStyles";
import {
  BackDiv,
  BlueButton,
  BorderP,
  Button,
  CancleIconDiv,
  FlexDiv,
} from "../styles/styleUnities";

const QrCodePart = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <QrCodeDivShow show={show}>
      <CancleIconDiv>
        <Button onClick={() => setShow(false)}>
          <CancleIcon />
        </Button>
      </CancleIconDiv>
      <BackDiv>
        <BackIcon /> Back to Class List
      </BackDiv>
      <FlexDiv>
        <BorderP>Join 302 Science</BorderP>
      </FlexDiv>
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
    </QrCodeDivShow>
  );
};

export default QrCodePart;
