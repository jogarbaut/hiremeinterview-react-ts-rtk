import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for CustomQuestionSetsState
interface CustomQuestionSetsState {
  customQuestionSets: CustomQuestionSet[];
}

// Define interface for CustomQuestionSet
// Interface includes questions property which has type of array of type Question
export interface CustomQuestionSet {
  id: string;
  title: string;
  questions: Question[];
  isFavorite: boolean;
  isCustom: boolean;
}

// Define interface for Question
export interface Question {
  id: string;
  question: string;
  isCustom: boolean;
}

// Define initial state of customQuestionSets which checks for key in local storage
// If key is not present, an empty array is defined
const customQuestionSetsJSON = localStorage.getItem("customQuestionSets")
const initialState: CustomQuestionSetsState = {
  customQuestionSets: customQuestionSetsJSON !== null ? (JSON.parse(customQuestionSetsJSON))["customQuestionSets"] : []
};

// Create customQuetionSetsSlice with name, initialState, and reducers parameters
const customQuestionSetsSlice = createSlice({
  name: "customQuestionSets",
  initialState,
  reducers: {
    // addCustomQuestionSet allows new customQuestionSet to be added to state
    addCustomQuestionSet: (state, action: PayloadAction<CustomQuestionSet>) => {
      state.customQuestionSets.push(action.payload);
    },
    // updateCustomQuestionSet allows customQuestionSet to be updated
    updateCustomQuestionSet: (state, action: PayloadAction<CustomQuestionSet>) => {
      if (!action.payload?.id) return
      const { id } = action.payload
      const filteredSets = state.customQuestionSets.filter(set => set.id !== id)
      state.customQuestionSets = [...filteredSets, action.payload]
    },
    // deleteCustomQuestionSet allows customQuestionSet to be deleted
    deleteCustomQuestionSet: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const filteredSets = state.customQuestionSets.filter(set => set.id !== id)
      state.customQuestionSets = filteredSets
    },
    toggleFavoriteQuestionSet: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const set = state.customQuestionSets.find(set => set.id === id)
      if (set) {
        set.isFavorite = !set.isFavorite
      }
    }
  },
});

// Export access methods for state
export const selectAllQuestionSets = (state: CustomQuestionSetsState) => state.customQuestionSets
export const selectQuestionSetById = (state: CustomQuestionSetsState, id: string) => state.customQuestionSets.find(set => set.id === id)

// Export customQuestionSetsSlice actions
export const { addCustomQuestionSet, updateCustomQuestionSet, deleteCustomQuestionSet, toggleFavoriteQuestionSet } = customQuestionSetsSlice.actions

export default customQuestionSetsSlice.reducer;
