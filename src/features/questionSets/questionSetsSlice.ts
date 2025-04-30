import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionSet, Question, QuestionSetsState } from './questionSetsTypes';
import { questionSets as defaultQuestionSets } from '@/data/defaultQuestionSets';
import { v4 as uuidv4 } from 'uuid';

// Load user sets from localstorage if exist
const userSetsFromStorage = localStorage.getItem('userQuestionSets');

const parsedUserSets = (() => {
    try {
        const parsed = JSON.parse(userSetsFromStorage || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
})();

// Initial state
const initialState: QuestionSetsState = {
    questionSets: [...defaultQuestionSets, ...parsedUserSets],
};

const questionSetsSlice = createSlice({
    name: 'questionSets',
    initialState,
    reducers: {
        toggleFavoriteQuestionSet: (state, action: PayloadAction<string>) => {
            const set = state.questionSets.find((s) => s.id === action.payload);
            if (set) set.isFavorite = !set.isFavorite;
        },

        addQuestionSet: (state, action: PayloadAction<QuestionSet>) => {
            state.questionSets.push(action.payload);
        },

        updateQuestionSet: (state, action: PayloadAction<QuestionSet>) => {
            const index = state.questionSets.findIndex((s) => s.id === action.payload.id);
            if (index !== -1) state.questionSets[index] = action.payload;
        },

        deleteQuestionSet: (state, action: PayloadAction<string>) => {
            state.questionSets = state.questionSets.filter((s) => s.id !== action.payload);
        },

        addQuestionToSet: (
            state,
            action: PayloadAction<{ setId: string; questionText: string }>,
        ) => {
            const { setId, questionText } = action.payload;
            const set = state.questionSets.find((s) => s.id === setId);
            if (set) {
                set.questions.push({
                    id: uuidv4(),
                    text: questionText,
                });
                set.updatedAt = new Date().toISOString();
            }
        },

        copyQuestionToUserSet: (
            state,
            action: PayloadAction<{ targetSetId: string; questionToCopy: Question }>,
        ) => {
            const { targetSetId, questionToCopy } = action.payload;
            const set = state.questionSets.find((s) => s.id === targetSetId);
            if (set && set.source === 'user') {
                const newQuestion: Question = {
                    id: uuidv4(),
                    text: questionToCopy.text,
                    isCopied: true,
                    originId: questionToCopy.id,
                };
                set.questions.push(newQuestion);
                set.updatedAt = new Date().toISOString();
            }
        },

        deleteQuestionFromSet: (
            state,
            action: PayloadAction<{ setId: string; questionId: string }>,
        ) => {
            const { setId, questionId } = action.payload;
            const set = state.questionSets.find((s) => s.id === setId);
            if (set) {
                set.questions = set.questions.filter((q) => q.id !== questionId);
                set.updatedAt = new Date().toISOString();
            }
        },
    },
});

export const {
    toggleFavoriteQuestionSet,
    addQuestionSet,
    updateQuestionSet,
    deleteQuestionSet,
    addQuestionToSet,
    copyQuestionToUserSet,
    deleteQuestionFromSet,
} = questionSetsSlice.actions;

export default questionSetsSlice.reducer;
