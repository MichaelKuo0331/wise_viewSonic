import { StudentsList } from "../styles/studentStyles";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StudentCardComponet } from "../components/studentCard";
import { RootState } from "../store";
import { IStudent } from "../typeModeul/class";

const GroupTable = ({ activeTab }: { activeTab: string }) => {
  const students = useSelector((state: RootState) => state.class.students);
  const [studentData, setStudentData] = useState<IStudent[]>([]);

  useEffect(() => {
    if (activeTab === "group") {
      setStudentData(students.filter((student) => student.name !== "Guest"));
    }
  }, [activeTab, students]);

  return (
    <>
      <StudentsList>
        {studentData.map((student) => (
          <StudentCardComponet student={student} />
        ))}
      </StudentsList>
    </>
  );
};

export default GroupTable;
