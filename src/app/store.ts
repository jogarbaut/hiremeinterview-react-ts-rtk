import { configureStore } from "@reduxjs/toolkit";
import questionSetsReducer from "../features/questionSets/questionSetSlice"
import usersReducer from "@/features/users/usersSlice"

export const store = configureStore({
  reducer: {
    questionSets: questionSetsReducer,
    users: usersReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch