import { StudentsList } from "../styles/studentStyles";

import { useSelector } from "react-redux";
import { StudentCardComponet } from "../components/studentCard";
import { RootState } from "../store";
import { IStudent } from "../typeModeul/class";

const StudentsListTable = () => {
  const students = useSelector((state: RootState) => state.class.students);

  return (
    <>
      <StudentsList>
        {students.map((student: IStudent) => (
          <StudentCardComponet student={student} />
        ))}
      </StudentsList>
    </>
  );
};

export default StudentsListTable;
