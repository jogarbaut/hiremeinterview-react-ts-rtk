// Types related to user-created (custom) question sets

export interface UserQuestion {
    id: string;
    question: string;
    isCustom: boolean;
}

export interface UserQuestionSet {
    id: string;
    title: string;
    questions: UserQuestion[];
    isFavorite: boolean;
    isCustom: boolean;
}

export interface UserQuestionSetsState {
    userQuestionSets: UserQuestionSet[];
}
