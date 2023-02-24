import { QuestionSet, Question } from "@/components/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  questionSetIdFavorites: string;
  customQuestionSets: QuestionSet[];
  darkMode: boolean;
}

const initialState: UserState = {
  id: "1",
  questionSetIdFavorites: "",
  customQuestionSets: [],
  darkMode: false
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCustomQuestionSet: (state, action: PayloadAction<QuestionSet>) => {
      state.customQuestionSets.push(action.payload)
    },
    removeCustomQuestionSet: (state, action: PayloadAction<QuestionSet>) => {
      state.customQuestionSets.filter((customQuestionSet) => customQuestionSet.id !== action.payload.id)
    },
    addCustomQuestion: (state, action: PayloadAction<Question>) => {
      state.customQuestionSets.forEach(customQuestionSet => {
        if (customQuestionSet.id === action.payload.id) {
          customQuestionSet.questions.push(action.payload)
        }
      })
    },
    removeCustomQuestion: (state, action: PayloadAction<Question>) => {
      state.customQuestionSets.forEach(customQuestionsSet => {
        if (customQuestionsSet.id === action.payload.id) {
          customQuestionsSet.questions.filter((customQuestion) => customQuestion.id !== action.payload.id)
        }
      })
    },
    toggleDarkMode: (state) => {
      state.darkMode = true
    },
    toggleLightMode: (state) => {
      state.darkMode = false
    }
  }
})

export default usersSlice.reducer