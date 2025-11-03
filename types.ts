export enum GameState {
  START = 'START',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULTS = 'RESULTS'
}

export enum ResultType {
  Explorer = 'Explorer',     // 潛力股探險家 (Type 1)
  Thinker = 'Thinker',       // 十字路口的思考者 (Type 2)
  LoneRanger = 'LoneRanger' // 勤奮的獨行俠 (Type 3)
}

export interface Option {
  text: string;
  type: ResultType;
}

export interface Question {
  text: string;
  options: Option[];
}

export interface ResultContent {
  title: string;
  whatYouNeed: string;
  coursePitch: string;
  ctaButtonText: string;
}