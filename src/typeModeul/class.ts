export interface IClass {
  className: string;
  id: string;
  qRCodeLink: string;
  totalStudents: number;
  studentsNumber: number;
  students: IStudent[];
}

export interface IStudent {
  id: string;
  name: string;
  score: number;
}

export interface dataProps {
  data: IClass;
}
