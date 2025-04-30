import { RootState } from '@/app/store';
import { QuestionSet } from './questionSetsTypes';

// All question sets
export const selectAllQuestionSets = (state: RootState): QuestionSet[] =>
    state.questionSets.questionSets;

// Default sets only
export const selectDefaultQuestionSets = (state: RootState): QuestionSet[] =>
    state.questionSets.questionSets.filter((set) => set.source === 'default');

// User sets only
export const selectUserQuestionSets = (state: RootState): QuestionSet[] =>
    state.questionSets.questionSets.filter((set) => set.source === 'user');

// By ID
export const selectQuestionSetById = (state: RootState, id: string): QuestionSet | undefined =>
    state.questionSets.questionSets.find((set) => set.id === id);

// Favorites
export const selectFavoriteSets = (state: RootState): QuestionSet[] =>
    state.questionSets.questionSets.filter((set) => set.isFavorite);
