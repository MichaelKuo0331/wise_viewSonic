import { QRCodeSVG } from "qrcode.react";

const QrCodeComponent = ({ url }: { url: string }) => {
  return (
    <div>
      <h3>QR Code</h3>
      <QRCodeSVG value={url} size={300} />
    </div>
  );
};

export default QrCodeComponent;
