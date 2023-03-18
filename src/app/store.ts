import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import customQuestionSetsReducer from "../features/customQuestionSets/customQuestionSetsSlice";
import usersReducer from "@/features/users/usersSlice";
import {
  addCustomQuestionSet,
  updateCustomQuestionSet,
  deleteCustomQuestionSet,
  toggleFavoriteQuestionSet,
} from "@/features/customQuestionSets/customQuestionSetsSlice";
import hireMeQuestionSetsReducer, { toggleFavoriteHireMeQuestionSet } from "../features/hireMeQuestionSets/hireMeQuestionSets"

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
      JSON.stringify((listenerApi.getState() as RootState).customQuestionSets)
    ),
});

listenerMiddleware.startListening({
  matcher: isAnyOf(
    toggleFavoriteHireMeQuestionSet
  ),
  effect: (action, listenerApi) => localStorage.setItem("hireMeQuestionSetFavorites", JSON.stringify((listenerApi.getState() as RootState).hireMeQuestionSets))
})

export const store = configureStore({
  reducer: {
    customQuestionSets: customQuestionSetsReducer,
    hireMeQuestionSets: hireMeQuestionSetsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
