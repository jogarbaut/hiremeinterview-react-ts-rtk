export enum SelectedPage {
  Home = "Home",
  About = "About",
  MockInterview = "Mock Interview",
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