import {
  StudentCard,
  StudentCardAction,
  StudentCardName,
  StudentCardNumber,
  StudentsList,
} from "../styles/studentStyles";

import { ActionButton } from "../styles/styleUnities";

const StudentsListTable = () => {
  return (
    <>
      <StudentsList>
        {Array.from({ length: 20 }, (_, index) => (
          <StudentCard key={index}>
            <StudentCardNumber>
              {String(index + 1).padStart(2, "0")}
            </StudentCardNumber>
            <StudentCardName>Guest</StudentCardName>
            <StudentCardAction>
              <ActionButton type="minus">-1</ActionButton>
              <span className="score">2</span>
              <ActionButton type="plus">+1</ActionButton>
            </StudentCardAction>
          </StudentCard>
        ))}
      </StudentsList>
    </>
  );
};

export default StudentsListTable;
