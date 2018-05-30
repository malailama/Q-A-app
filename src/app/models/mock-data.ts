import { Question, Student} from './models';

export const MOCKQS: Question[] = [
{ qId: 1, type: 'mcq', title: 'No of Eggs', description: 'How many eggs are there?', idealAnswer: '', answerChoices: ['1', '2', '3'], instructions: '', correctAnswer: '2', selectedAnswer: ''},
{ qId: 2, type: 'text', title: 'Biggest Planet', description: 'Name of the biggest Planet?', idealAnswer: '', answerChoices: [], instructions: '', correctAnswer: 'Jupiter', selectedAnswer: ''},
{ qId: 3, type: 'para', title: 'Book', description: 'Summary of your favorite book', idealAnswer: '', answerChoices: [], instructions: '', correctAnswer: '', selectedAnswer: ''},
];

export const MOCKSTUDENTS: Student[] = [
   {sId: 1, name: 'John', assignedQuestions: [this.MOCKQS[1], this.MOCKQS[2] ] },
   {sId: 2, name: 'Jacob', assignedQuestions: [this.MOCKQS[1], this.MOCKQS[3] ]},
]