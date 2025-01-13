import { MainContainer } from "./styles/styleUnities";

import QrCodePart from "./layout/qrCodePart";
import StudentPart from "./layout/studentPart";

const App = () => {
  return (
    <MainContainer>
      <QrCodePart />
      <StudentPart />
    </MainContainer>
  );
};

export default App;
