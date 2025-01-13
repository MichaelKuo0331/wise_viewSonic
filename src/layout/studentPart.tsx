import { useSelector } from "react-redux";
import CancleIcon from "../icons/CancleIcon";
import DotsIcon from "../icons/DotsIcon";
import PeopleIcon from "../icons/PeopleIcon";
import { StudentHeader, StundentDivShow } from "../styles/studentStyles";
import {
  BorderP,
  Button,
  CancleIconDiv,
  FlexDiv,
  TabButton,
} from "../styles/styleUnities";
import GroupTable from "./groupTable";
import StudentsListTable from "./studentsTable";

import { useState } from "react";
import { RootState } from "../store";

const StudentPart = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [show, setShow] = useState(true);
  const data = useSelector((state: RootState) => state.class);
  if (!show) return null;

  return (
    <>
      <StundentDivShow show={show}>
        <StudentHeader>
          <CancleIconDiv>
            <Button onClick={() => setShow(false)}>
              <CancleIcon />
            </Button>
          </CancleIconDiv>
          <FlexDiv style={{ marginTop: "30px" }}>
            <BorderP>{data.className}</BorderP>
            <PeopleIcon />
            <BorderP>{data.studentsNumber + "/" + data.totalStudents}</BorderP>
          </FlexDiv>
          <FlexDiv>
            <TabButton
              active={activeTab === "list"}
              onClick={() => setActiveTab("list")}
            >
              <BorderP>Student List</BorderP>
            </TabButton>
            <TabButton
              active={activeTab === "group"}
              onClick={() => setActiveTab("group")}
            >
              <BorderP>Group</BorderP>
            </TabButton>
            <Button
              style={{ marginLeft: "auto", marginRight: "30px" }}
              onClick={() => console.log("click")}
            >
              <DotsIcon />
            </Button>
          </FlexDiv>
        </StudentHeader>
        {activeTab === "list" && (
          <StudentsListTable data={data.students || []} />
        )}
        {activeTab === "group" && <GroupTable />}
      </StundentDivShow>
    </>
  );
};

export default StudentPart;
