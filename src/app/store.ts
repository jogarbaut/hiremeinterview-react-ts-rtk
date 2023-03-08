import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import questionSetsReducer from "../features/questionSets/questionSetSlice";
import usersReducer from "@/features/users/usersSlice";
import {
  addCustomQuestionSet,
  updateCustomQuestionSet,
  deleteCustomQuestionSet,
  toggleFavoriteQuestionSet,
} from "@/features/questionSets/questionSetSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    addCustomQuestionSet,
    updateCustomQuestionSet,
    deleteCustomQuestionSet,
    toggleFavoriteQuestionSet
  ),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "questionSet",
      JSON.stringify((listenerApi.getState() as RootState).questionSets)
    ),
});

export const store = configureStore({
  reducer: {
    questionSets: questionSetsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
