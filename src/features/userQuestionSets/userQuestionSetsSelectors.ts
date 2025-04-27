import { RootState } from '@/app/store';
import { UserQuestionSet } from './userQuestionSetsTypes';

// Selector to get all user question sets
export const selectAllUserQuestionSets = (state: RootState): UserQuestionSet[] =>
    state.userQuestionSets.userQuestionSets;

// Selector to get a single user question set by ID
export const selectUserQuestionSetById = (
    state: RootState,
    id: string,
): UserQuestionSet | undefined =>
    state.userQuestionSets.userQuestionSets.find((set) => set.id === id);
