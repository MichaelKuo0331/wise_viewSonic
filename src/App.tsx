import { Provider } from "react-redux";
import QrCodePart from "./layout/qrCodePart";
import StudentPart from "./layout/studentPart";
import store from "./store";
import { MainContainer } from "./styles/styleUnities";

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        {<QrCodePart />}
        {<StudentPart />}
      </MainContainer>
    </Provider>
  );
};

export default App;
