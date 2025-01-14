import { useState } from "react";
import BackIcon from "../icons/BackIcon";
import CancleIcon from "../icons/CancleIcon";
import CopyIcon from "../icons/CopyIcon";

import { useSelector } from "react-redux";
import { handleCopyText } from "../components/copy";
import QrCodeComponent from "../components/qrCode";
import { RootState } from "../store";
import { Footer, QrCodeContainer, QrCodeHeader } from "../styles/qrCodeStyles";
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
    <QrCodeContainer show={show}>
      <QrCodeHeader>
        <CancleIconDiv>
          <Button onClick={() => setShow(false)}>
            <CancleIcon />
          </Button>
        </CancleIconDiv>
        <BackDiv>
          <BackIcon /> Back to Class List
        </BackDiv>
        <FlexDiv>
          <BorderP>{"Join" + " " + data.className}</BorderP>
        </FlexDiv>
        <FlexDiv>
          <BorderP>{"ID:" + data.id}</BorderP>
          <BlueButton onClick={() => handleCopyText(data.id)}>
            <CopyIcon />
          </BlueButton>
          &ensp;
          <BorderP>Link</BorderP>
          <BlueButton onClick={() => handleCopyText(data.qRCodeLink)}>
            <CopyIcon />
          </BlueButton>
        </FlexDiv>
      </QrCodeHeader>
      <QrCodeComponent url={data.qRCodeLink} />
      <Footer>Version 1.1.7</Footer>
    </QrCodeContainer>
  );
};

export default QrCodePart;
