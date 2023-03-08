import { questionSets } from "@/data/questionSets";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for QuestionSetState
interface QuestionSetsState {
  questionSets: QuestionSet[];
}

// Define interface for QuestionSet
// Interface includes questions property which has type of array of type Question
export interface QuestionSet {
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
  isFavorite: boolean;
  isCustom: boolean;
}

// Define initial state of questionSets which imports data form 'data' folder
const questionSetJSON = localStorage.getItem("questionSet")
const initialState: QuestionSetsState = {
  questionSets: questionSetJSON !== null ? (JSON.parse(questionSetJSON))["questionSets"] : questionSets
};

// Create quetionSetsSlice with name, initialState, and reducers parameters
const questionSetsSlice = createSlice({
  name: "questionSets",
  initialState,
  reducers: {
    // addCustomQuestionSet allows new custom questionSet to be added to state
    addCustomQuestionSet: (state, action: PayloadAction<QuestionSet>) => {
      state.questionSets.push(action.payload);
    },
    // updateCustomQuestionSet allows custom questionSet to be updated
    updateCustomQuestionSet: (state, action: PayloadAction<QuestionSet>) => {
      if (!action.payload?.id) return
      const { id } = action.payload
      const filteredSets = state.questionSets.filter(set => set.id !== id)
      state.questionSets = [...filteredSets, action.payload]
    },
    // deleteCustomQuestionSet allows custom auestionSet to be deleted
    deleteCustomQuestionSet: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const filteredSets = state.questionSets.filter(set => set.id !== id)
      state.questionSets = filteredSets
    },
    toggleFavoriteQuestionSet: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const set = state.questionSets.find(set => set.id === id)
      if (set) {
        set.isFavorite = !set.isFavorite
      }
    }
  },
});

// Export access methods for state
export const selectAllQuestionSets = (state: QuestionSetsState) => state.questionSets
export const selectQuestionSetById = (state: QuestionSetsState, id: string) => state.questionSets.find(set => set.id === id)

// Export questSetsSlice actions
export const { addCustomQuestionSet, updateCustomQuestionSet, deleteCustomQuestionSet, toggleFavoriteQuestionSet } = questionSetsSlice.actions

export default questionSetsSlice.reducer;
