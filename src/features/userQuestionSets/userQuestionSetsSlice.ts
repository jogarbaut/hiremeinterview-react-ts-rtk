import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserQuestionSetsState, UserQuestionSet } from './userQuestionSetsTypes';

// Define initial state of userQuestionSet with default questions from state
const userQuestionSetsJSON = localStorage.getItem('userQuestionSets');
const initialState: UserQuestionSetsState = {
    userQuestionSets:
        userQuestionSetsJSON !== null ? JSON.parse(userQuestionSetsJSON)['userQuestionSets'] : [],
};

// Create userQuetionSetsSlice with name, initialState, and reducers parameters
const userQuestionSetsSlice = createSlice({
    name: 'userQuestionSets',
    initialState,
    reducers: {
        // addUserQuestionSet allows new userQuestionSet to be added to state
        addUserQuestionSet: (state, action: PayloadAction<UserQuestionSet>) => {
            state.userQuestionSets.push(action.payload);
        },
        // updateUserQuestionSet allows userQuestionSet to be updated
        updateUserQuestionSet: (state, action: PayloadAction<UserQuestionSet>) => {
            if (!action.payload?.id) return;
            const { id } = action.payload;
            const filteredSets = state.userQuestionSets.filter((set) => set.id !== id);
            state.userQuestionSets = [...filteredSets, action.payload];
        },
        // deleteUserQuestionSet allows userQuestionSet to be deleted
        deleteUserQuestionSet: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const filteredSets = state.userQuestionSets.filter((set) => set.id !== id);
            state.userQuestionSets = filteredSets;
        },
        toggleFavoriteUserQuestionSet: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const set = state.userQuestionSets.find((set) => set.id === id);
            if (set) {
                set.isFavorite = !set.isFavorite;
            }
        },
    },
});

// Export userQuestionSetsSlice actions
export const {
    addUserQuestionSet,
    updateUserQuestionSet,
    deleteUserQuestionSet,
    toggleFavoriteUserQuestionSet,
} = userQuestionSetsSlice.actions;

export default userQuestionSetsSlice.reducer;
