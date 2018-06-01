import { Component, OnInit } from '@angular/core';

import { Question, Student } from '../../models/models';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

   allStudents: Student[] = [];
   selectedStudent = new Student();
   
   allQuestions: Question[] = [];
   selectedQuestion = new Question();

  constructor(
     public dataServie: DataService,
  ) { }

  ngOnInit() {
   this.dataServie.getStudents()
      .subscribe( stu => this.allStudents = stu)
  }

  onChange() {
   //   console.log('Selected ', this.selectedStudent);
     this.allQuestions = [];
     this.allQuestions = this.selectedStudent.assignedQuestions;
  }

  selectQuestion(qs: Question) {
     this.selectedQuestion = qs;
   //   console.log('Selected Question ', this.selectedQuestion)
  }

  mcqAnswerChange(choiceIndex: number, isChecked: boolean){
   //   console.log("MCQ Option: ", choiceIndex,' Selected: ', isChecked);
     if(isChecked) {
        this.selectedQuestion.mcqSelectedAnswer.push(choiceIndex);
     } else {
        let index = this.selectedQuestion.mcqSelectedAnswer.findIndex(x => x === choiceIndex);
        this.selectedQuestion.mcqSelectedAnswer.splice(index, 1);
     }
   //   console.log('Selected Question: ', this.selectedQuestion.mcqSelectedAnswer);
  }

  saveAnswer(){
   //   console.log('Answer ', this.selectedQuestion.selectedAnswer);
     this.selectedStudent.assignedQuestions.map(qn => {
        if(qn.id === this.selectedQuestion.id) {
           qn.selectedAnswer = this.selectedQuestion.selectedAnswer;
        }
     })

     this.dataServie.updateStudent(this.selectedStudent)
      .subscribe(() => alert('Answer saved successfully'))
  }
}
