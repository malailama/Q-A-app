export class Question {
   public qId: number;
   public type: string;
   public title: string;
   public description: string;
   public idealAnswer?: string;
   public mcqChoices?: string[];
   public mcqCorrect?: number[];
   public instructions?: string;
   public correctAnswer?: string;
   public selectedAnswer?: string;
}

export class Student {
   public sId: number;
   public name: string;
   public assignedQuestions?: Question[]
}