import {
  StudentCard,
  StudentCardAction,
  StudentCardName,
  StudentCardNumber,
  StudentCardScore,
  StudentsList,
} from "../styles/studentStyles";

import { useDispatch, useSelector } from "react-redux";
import { decrementScore, incrementScore, RootState } from "../store";
import { ActionButton } from "../styles/styleUnities";
import { IStudent } from "../typeModeul/class";

const StudentsListTable: React.FC<{ data: IStudent[] }> = () => {
  const dispatch = useDispatch();
  const students = useSelector((state: RootState) => state.class.students);

  return (
    <>
      <StudentsList>
        {students.map((student: IStudent) => (
          <StudentCard key={student.id}>
            <StudentCardNumber name={student.name}>
              {student.id}
            </StudentCardNumber>
            <StudentCardName name={student.name}>
              {student.name}
            </StudentCardName>
            <StudentCardAction name={student.name}>
              <ActionButton
                type="minus"
                name={student.name}
                onClick={() => dispatch(decrementScore(student.id))}
              >
                -1
              </ActionButton>
              <StudentCardScore name={student.name}>
                {student.score}
              </StudentCardScore>
              <ActionButton
                type="plus"
                name={student.name}
                onClick={() => dispatch(incrementScore(student.id))}
              >
                +1
              </ActionButton>
            </StudentCardAction>
          </StudentCard>
        ))}
      </StudentsList>
    </>
  );
};

export default StudentsListTable;
