import { Question, Student} from './models';

export const MOCKQS: Question[] = [
{ id: 1, type: 'mcq', title: 'No of Eggs', description: 'How many eggs are there?', idealAnswer: '', mcqChoices: ['1','2','3','4'], mcqCorrect: [2], instructions: '', correctAnswer: '2', selectedAnswer: '', mcqSelectedAnswer: []},
{ id: 2, type: 'text', title: 'Biggest Planet', description: 'Name of the biggest Planet?', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: 'Jupiter', selectedAnswer: '', mcqSelectedAnswer: []},
{ id: 3, type: 'para', title: 'Book', description: 'Summary of your favorite book', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: '', selectedAnswer: '', mcqSelectedAnswer: []},
];

export const MOCKSTUDENTS: Student[] = [
   {sId: 1, name: 'John', assignedQuestions: [this.MOCKQS[0], this.MOCKQS[1] ] },
   {sId: 2, name: 'Jacob', assignedQuestions: [this.MOCKQS[0], this.MOCKQS[2] ]},
   {sId: 3, name: 'Mark', assignedQuestions: [this.MOCKQS[1], this.MOCKQS[2]]},
]