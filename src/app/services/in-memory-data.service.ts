import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question, Student } from '../models/models';

export class InMemoryDataService implements InMemoryDbService {
   createDb() {
      const mquestions: Question[] = [
         { id: 1, type: 'mcq', title: 'No of Eggs', description: 'How many eggs are there?', idealAnswer: '', mcqChoices: ['1', '2', '3', '4'], mcqCorrect: [2], instructions: '', correctAnswer: '2', selectedAnswer: '', mcqSelectedAnswer: [] },
         { id: 2, type: 'text', title: 'Biggest Planet', description: 'Name of the biggest Planet?', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: 'Jupiter', selectedAnswer: '', mcqSelectedAnswer: [] },
         { id: 3, type: 'para', title: 'Book', description: 'Summary of your favorite book', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: '', selectedAnswer: '', mcqSelectedAnswer: [] },
      ];
      
      const mstudents: Student[] = [
         {
            id: 1,
            name: 'John',
            assignedQuestions:
               [
                  { id: 1, type: 'mcq', title: 'No of Eggs', description: 'How many eggs are there?', idealAnswer: '', mcqChoices: ['1', '2', '3', '4'], mcqCorrect: [2], instructions: '', correctAnswer: '2', selectedAnswer: '', mcqSelectedAnswer: [] },
                  { id: 2, type: 'text', title: 'Biggest Planet', description: 'Name of the biggest Planet?', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: 'Jupiter', selectedAnswer: '', mcqSelectedAnswer: [] },
               ]
         },
         {
            id: 2,
            name: 'Jacob',
            assignedQuestions:
               [
                  { id: 1, type: 'mcq', title: 'No of Eggs', description: 'How many eggs are there?', idealAnswer: '', mcqChoices: ['1', '2', '3', '4'], mcqCorrect: [2], instructions: '', correctAnswer: '2', selectedAnswer: '', mcqSelectedAnswer: [] },
                  { id: 3, type: 'para', title: 'Book', description: 'Summary of your favorite book', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: '', selectedAnswer: '', mcqSelectedAnswer: [] },
               ]
         },
         {
            id: 3,
            name: 'Mark',
            assignedQuestions:
               [
                  { id: 2, type: 'text', title: 'Biggest Planet', description: 'Name of the biggest Planet?', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: 'Jupiter', selectedAnswer: '', mcqSelectedAnswer: [] },
                  { id: 3, type: 'para', title: 'Book', description: 'Summary of your favorite book', idealAnswer: '', mcqChoices: [], mcqCorrect: null, instructions: '', correctAnswer: '', selectedAnswer: '', mcqSelectedAnswer: [] },
               ]
         },
      ];
      return { mquestions, mstudents };
   }
}
