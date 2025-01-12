import CancleIcon from "../icons/CancleIcon";
import PeopleIcon from "../icons/PeopleIcon";
import {
  StudentCard,
  StudentsList,
  StundentCard,
} from "../styles/studentStyles";
import { BorderP, CancleIconContainer, FlexDiv } from "../styles/styleUnities";

const StudentPart = () => {
  return (
    <>
      {/* <StudentsList />
      <Group /> */}
      <StundentCard>
        <CancleIconContainer>
          <CancleIcon />
        </CancleIconContainer>
        <FlexDiv style={{ marginTop: "30px" }}>
          <BorderP>302 Science</BorderP>
          <PeopleIcon />
          <BorderP>16/30</BorderP>
        </FlexDiv>
        <div style={{ display: "flex", gap: "10px" }}>
          <button>Student List</button>
          <button>Group</button>
        </div>
        <StudentsList>
          {/* 學生卡片範例 */}
          {Array.from({ length: 20 }, (_, index) => (
            <StudentCard key={index}>
              <span>{index + 1}</span>
              <span>Guest</span>
            </StudentCard>
          ))}
        </StudentsList>
      </StundentCard>
    </>
  );
};

export default StudentPart;
