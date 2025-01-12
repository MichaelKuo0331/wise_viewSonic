import { Container } from "./styles/styleUnities";

import QrCodePart from "./layout/qrCodePart";
import StudentPart from "./layout/studentPart";

const App: React.FC = () => {
  return (
    <Container>
      {/* 左側卡片 */}
      <QrCodePart />
      {/* 右側區域 */}
      <StudentPart />
    </Container>
  );
};

export default App;
