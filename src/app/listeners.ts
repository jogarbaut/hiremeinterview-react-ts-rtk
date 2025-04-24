import { startAppListening as rawStartAppListening } from "./listenerMiddleware";
import { TypedStartListening, isAnyOf } from "@reduxjs/toolkit";
import {
  addCustomQuestionSet,
  updateCustomQuestionSet,
  deleteCustomQuestionSet,
  toggleFavoriteQuestionSet,
} from "@/features/customQuestionSets/customQuestionSetsSlice";

import { toggleFavoriteHireMeQuestionSet } from "@/features/hireMeQuestionSets/hireMeQuestionSetsSlice";
import { RootState, AppDispatch } from "./store";

const startAppListening: TypedStartListening<RootState, AppDispatch> = rawStartAppListening

// Set up Redux listeners to persist relevant state slices to localStorage
export function setupListeners() {
  //  Save custom question sets
  startAppListening({
    matcher: isAnyOf(
      addCustomQuestionSet,
      updateCustomQuestionSet,
      deleteCustomQuestionSet,
      toggleFavoriteQuestionSet
    ),
    effect: (action, api) => {
      const state = api.getState().customQuestionSets
      localStorage.setItem("customQuetionSets", JSON.stringify(state))
    }
  })

  // Save question set to favorites
  startAppListening({
    matcher: toggleFavoriteHireMeQuestionSet.match,
    effect: (action, api) => {
      const state = api.getState().hireMeQuestionSets
      localStorage.setItem("hireMeQuestionSetFavorites", JSON.stringify(state))
    }
  })
}