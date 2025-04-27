// Types related to default question sets (prebuilt interview questions)

export interface DefaultQuestion {
    id: string;
    question: string;
    isCustom: boolean;
}

export interface DefaultQuestionSet {
    id: string;
    title: string;
    questions: DefaultQuestion[];
    isFavorite: boolean;
    isCustom: boolean;
}

export interface DefaultQuestionSetsState {
    defaultQuestionSets: DefaultQuestionSet[];
    defaultQuestionSetFavorites: string[];
}
