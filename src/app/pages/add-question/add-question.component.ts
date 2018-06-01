import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/models';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

   // Question Properties
   id: number;
   // 3 types: 'submission','mcq','passage'
   type: string = 'text'
   title: string;
   description: string;
   idealAnswer: string;
   mcqA: string;
   mcqB: string;
   mcqC: string;
   mcqD: string;
   mcqRightAnswer: number[] = [];
   instructions: string;
   correctAnswer: string;

   // Flags
   submitted = false;

   newQuestion = new Question();
   allQuestions: Question[] = [];
   
  constructor(
     public router: Router,
     public dataService: DataService,
  ) { }

  ngOnInit() {
     this.initialiseAllValues();

     this.dataService.getQuestions()
      .subscribe( allQues => this.allQuestions = allQues);
  }

  initialiseAllValues() {
     this.id = null;
     this.title = null;
     this.description = null;
     this.idealAnswer = null;
     this.mcqA = null;
     this.mcqB = null;
     this.mcqC = null;
     this.mcqD = null;
     this.mcqRightAnswer = [];
     this.instructions = null;
     this.correctAnswer = null;
     this.newQuestion = new Question();
     this.submitted = false;
  }

  mcqRightChange(id: number, isChecked: boolean){
     if (isChecked && this.mcqRightAnswer) {
        this.mcqRightAnswer.push(id);
     } else {
        let index = this.mcqRightAnswer.findIndex(x=> x === id);
        this.mcqRightAnswer.splice(index, 1);
     }
  }

  onSubmit(){
     this.newQuestion.id = this.allQuestions ? this.allQuestions.length+1 : 1;
     this.newQuestion.title = this.title ? this.title : '';
     this.newQuestion.description = this.description ? this.description : '';
     this.newQuestion.type = this.type ? this.type : '';
     this.newQuestion.idealAnswer = this.idealAnswer ? this.idealAnswer : '';
     this.newQuestion.instructions = this.instructions ? this.instructions : '';
     this.newQuestion.correctAnswer = this.correctAnswer ? this.correctAnswer : '';
     this.newQuestion.selectedAnswer = '';
     
     if (this.type === 'mcq' ) {
      let mcqCh: string[] = [];
      mcqCh.push(this.mcqA);
      mcqCh.push(this.mcqB);
      mcqCh.push(this.mcqC);
      mcqCh.push(this.mcqD);
      this.newQuestion.mcqChoices = mcqCh;
      this.newQuestion.mcqCorrect = this.mcqRightAnswer;
     } else {
        this.newQuestion.mcqChoices = [];
        this.newQuestion.mcqCorrect = [];
     }

     this.dataService.addQuestion(this.newQuestion as Question)
     .subscribe(qs => {
        this.allQuestions.push(qs)
     })
     ;

   //   console.log('Submit form triggered ', this.newQuestion);
     this.submitted = true;
  }

  goBack() {
     this.router.navigate(['teacher-dashboard']);
  }

}
