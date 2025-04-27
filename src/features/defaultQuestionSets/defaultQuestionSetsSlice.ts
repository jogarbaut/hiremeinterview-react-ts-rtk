import { questionSets } from '@/data/defaultQuestionSets';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultQuestionSetsState } from './defaultQuestionSetsTypes';

const favoritesFromStorage: string[] = JSON.parse(
    localStorage.getItem('defaultQuestionSetFavorites') || '[]',
);

const enrichedQuestionSets = questionSets.map((set) => ({
    ...set,
    isFavorite: favoritesFromStorage.includes(set.id),
}));

// Define initial state of defaultQuestionSet with default questions from data
const initialState: DefaultQuestionSetsState = {
    defaultQuestionSets: enrichedQuestionSets,
    defaultQuestionSetFavorites: favoritesFromStorage,
};

// Create slice
const defaultQuestionSetsSlice = createSlice({
    name: 'defaultQuestionSets',
    initialState,
    reducers: {
        toggleFavoriteDefaultQuestionSet: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const set = state.defaultQuestionSets.find((set) => set.id === id);
            if (set) {
                set.isFavorite = !set.isFavorite;
            }
        },
    },
});

// Export actions
export const { toggleFavoriteDefaultQuestionSet } = defaultQuestionSetsSlice.actions;

// Export reducer
export default defaultQuestionSetsSlice.reducer;
