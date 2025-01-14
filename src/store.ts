import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dummyData } from "./data/students";
import { IClass } from "./typeModeul/class";

const initialState: IClass = {
  ...dummyData,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    incrementScore: (state, action: PayloadAction<string>) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) {
        if (student.score < 100) student.score += 1;
        return;
      }
    },
    decrementScore: (state, action: PayloadAction<string>) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) {
        if (student.score > 0) student.score -= 1;
        return;
      }
    },
  },
});

export const { incrementScore, decrementScore } = studentsSlice.actions;

export const store = configureStore({
  reducer: {
    class: studentsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
