import { QuestionSet } from '@/features/questionSets/questionSetsTypes';

export const isUserSet = (set: QuestionSet) => set.source === 'user';
