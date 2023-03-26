import { questionSets } from "@/data/questionSets";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for HireMeQuestionSetsState
interface HireMeQuestionSetsState {
  hireMeQuestionSets: HireMeQuestionSet[];
  hireMeQuestionSetFavorites: string[];
}

// Define interface for HireMeQuestionSet
// Interface includes question property which has type of array of type Question
export interface HireMeQuestionSet {
  id: string;
  title: string;
  questions: HireMeQuestion[];
  isFavorite: boolean;
}

// Define interface for HireMeQuestion
export interface HireMeQuestion {
  id: string;
  question: string;
}

// Define initial state of hireMeQuestionSets which pulls data from data folder
const initialState: HireMeQuestionSetsState = {
  hireMeQuestionSets: questionSets,
  hireMeQuestionSetFavorites: []
}

// Create hireMeQuestionSetsSlice with name, initialState, and reducers parameters
const hireMeQuestionSetsSlice = createSlice({
  name: "hireMeQuestionSets",
  initialState,
  reducers: {
    toggleFavoriteHireMeQuestionSet: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const set = state.hireMeQuestionSets.find(set => set.id === id)
      if (set) {
        set.isFavorite = !set.isFavorite
      }
    }
  }
})

// Export access methods for state
export const selectAllHireMeQuestionSets = (state: HireMeQuestionSetsState) => state.hireMeQuestionSets
export const selectHireMeQuestionSetById = (state: HireMeQuestionSetsState, id: string) => state.hireMeQuestionSets.find(set => set.id === id)
export const selectAllHireMeQuestionSetFavorites = (state: HireMeQuestionSetsState) => state.hireMeQuestionSetFavorites

// Export hireMeQuestionSetSlice actions
export const { toggleFavoriteHireMeQuestionSet } = hireMeQuestionSetsSlice.actions

export default hireMeQuestionSetsSlice.reducer