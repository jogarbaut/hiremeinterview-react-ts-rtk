import { RootState } from '@/app/store';
import { DefaultQuestionSet } from './defaultQuestionSetsTypes';

// Selector to get all default question sets
export const selectAllDefaultQuestionSets = (state: RootState): DefaultQuestionSet[] =>
    state.defaultQuestionSets.defaultQuestionSets;

// Selector to get a single default question set by ID
export const selectDefaultQuestionSetById = (
    state: RootState,
    id: string,
): DefaultQuestionSet | undefined =>
    state.defaultQuestionSets.defaultQuestionSets.find((set) => set.id === id);

// Selector to get all favorite question set IDs
export const selectAllDefaultQuestionSetFavorites = (state: RootState): string[] =>
    state.defaultQuestionSets.defaultQuestionSetFavorites;
