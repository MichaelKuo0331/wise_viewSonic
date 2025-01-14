import { GroupContainer, StudentsList } from "../styles/studentStyles";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StudentCardComponet } from "../components/studentCard";
import { RootState } from "../store";
import { IStudent } from "../typeModeul/class";

const GroupTable = ({ activeTab }: { activeTab: string }) => {
  const students = useSelector((state: RootState) => state.class.students);
  const [groupedStudents, setGroupedStudents] = useState<IStudent[][]>([]);

  useEffect(() => {
    if (activeTab === "group") {
      const filteredStudents = students.filter(
        (student) => student.name !== "Guest"
      );

      // const shuffledStudents = [...filteredStudents].sort(
      //   () => Math.random() - 0.5
      // );

      const groups: IStudent[][] = [];
      for (let i = 0; i < filteredStudents.length; i += 5) {
        groups.push(filteredStudents.slice(i, i + 5));
      }

      setGroupedStudents(groups);
    }
  }, [activeTab, students]);

  return (
    <>
      <StudentsList>
        {groupedStudents.map((group, index) => (
          <GroupContainer key={index}>
            {group.map((student) => (
              <StudentCardComponet key={student.id} student={student} />
            ))}
          </GroupContainer>
        ))}
      </StudentsList>
    </>
  );
};

export default GroupTable;
