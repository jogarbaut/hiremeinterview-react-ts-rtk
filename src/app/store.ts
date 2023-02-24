import { configureStore } from "@reduxjs/toolkit";
import questionSetsReducer from "../features/questionSetSlice"

export const store = configureStore({
  reducer: {
    questionSets: questionSetsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch