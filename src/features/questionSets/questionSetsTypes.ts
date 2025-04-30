export type SourceType = 'default' | 'user';
export type Difficulty = 'easy' | 'medium' | 'hard';

export type Question = {
    id: string;
    text: string;
    originId?: string;
    isCopied?: boolean;
};

export type QuestionSet = {
    id: string;
    title: string;
    description?: string;
    questions: Question[];
    isFavorite: boolean;
    source: SourceType;
    tags?: string[];
    difficulty?: Difficulty;
    createdAt: string;
    updatedAt?: string;
};

export interface QuestionSetsState {
    questionSets: QuestionSet[];
}
