export enum SelectedPage {
  Home = "home",
  About = "about",
  Decks = "decks",
}

export interface QuestionSet {
  id: string;
  title: string;
  category: string;
  favorite: boolean;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  favorite: boolean;
}