import { useState } from "react";
import BackIcon from "../icons/BackIcon";
import CancleIcon from "../icons/CancleIcon";
import CopyIcon from "../icons/CopyIcon";

import { useSelector } from "react-redux";
import { handleCopyText } from "../components/copy";
import QrCodeComponent from "../components/qrCode";
import { RootState } from "../store";
import { Footer, QrCodeContainer, QrCodeDivShow } from "../styles/qrCodeStyles";
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
  const data = useSelector((state: RootState) => state.class);

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
        <BorderP>{data.className}</BorderP>
      </FlexDiv>
      <FlexDiv>
        <BorderP>{"ID:" + data.id}</BorderP>
        <BlueButton onClick={() => handleCopyText(data.id)}>
          <CopyIcon />
        </BlueButton>
        &emsp;
        <BorderP>Link</BorderP>
        <BlueButton onClick={() => handleCopyText(data.qRCodeLink)}>
          <CopyIcon />
        </BlueButton>
      </FlexDiv>
      <QrCodeContainer>
        <QrCodeComponent url={data.qRCodeLink} />
      </QrCodeContainer>
      <Footer>Version 1.1.7</Footer>
    </QrCodeDivShow>
  );
};

export default QrCodePart;
