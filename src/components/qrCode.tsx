import { QrCodeImgContainer } from "../styles/qrCodeStyles";

const QrCodeComponent = ({ url }: { url: string }) => {
  const imgSrc =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url;

  return <QrCodeImgContainer url={imgSrc} />;
};

export default QrCodeComponent;
