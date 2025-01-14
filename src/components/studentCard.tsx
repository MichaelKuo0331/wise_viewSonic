import { useDispatch } from "react-redux";
import { decrementScore, incrementScore } from "../store";
import {
  StudentCard,
  StudentCardAction,
  StudentCardName,
  StudentCardNumber,
  StudentCardScore,
} from "../styles/studentStyles";
import { ActionButton } from "../styles/styleUnities";
import { IStudent } from "../typeModeul/class";

export const StudentCardComponet = ({ student }: { student: IStudent }) => {
  const dispatch = useDispatch();

  return (
    <StudentCard key={student.id}>
      <StudentCardNumber name={student.name}>{student.id}</StudentCardNumber>
      <StudentCardName name={student.name}>{student.name}</StudentCardName>
      <StudentCardAction name={student.name}>
        <ActionButton
          type="minus"
          name={student.name}
          onClick={() => dispatch(decrementScore(student.id))}
        >
          -1
        </ActionButton>
        <StudentCardScore name={student.name}>{student.score}</StudentCardScore>
        <ActionButton
          type="plus"
          name={student.name}
          onClick={() => dispatch(incrementScore(student.id))}
        >
          +1
        </ActionButton>
      </StudentCardAction>
    </StudentCard>
  );
};
