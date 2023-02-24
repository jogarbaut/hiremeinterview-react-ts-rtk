import { createSlice } from "@reduxjs/toolkit";
import { QuestionSet } from "@/components/shared/types";

interface QuestionSetsState {
  value: QuestionSet[];
}

// Default questions here
const initialState: QuestionSetsState = {
  value: [
    {
      id: "1",
      title: "Basics",
      category: "General",
      favorite: false,
      questions: [
        {
          id: "123",
          question: "Can you please tell me about yourself?",
          favorite: false,
        },
        {
          id: "147",
          question: "Can you please tell me 3 of your greatest strengths?",
          favorite: false,
        },
        {
          id: "159",
          question: "Can you tell me about a difficult challenge you had to overcome?",
          favorite: false,
        },
      ],
    },
    {
      id: "2",
      title: "Questions about leadership styles",
      category: "Project Management",
      favorite: false,
      questions: [
        {
          id: "987",
          question: "How would you define your leadership style?",
          favorite: false,
        },
        {
          id: "654",
          question: "What would you do if a team member was falling behind in meeting their deadlines?",
          favorite: false,
        },
        {
          id: "357",
          question: "How would you handle a manager asking you to complete work outside of your defined scope?",
          favorite: false,
        },
      ],
    },
  ],
};

const questionSetsSlice = createSlice({
  name: "questionSets",
  initialState,
  reducers: {},
});

export default questionSetsSlice.reducer;
