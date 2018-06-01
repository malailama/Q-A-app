import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question, Student } from '../../models/models';
import { DataService } from '../../services/data.service';

@Component({
   selector: 'app-teacher-dashboard',
   templateUrl: './teacher-dashboard.component.html',
   styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

   mockQuestions: Question[] = [];
   assignmentQuestions: Question[] = [];
   selectAll: boolean;

   allStudents: Student[] = [];
   assignStudents: Student[] = [];
   selectAllStudents: boolean;

   typeHeading = {'mcq': 'MCQ (Quiz)', 'para': 'Passage (text)', 'text': 'Submission'};

   constructor(
      public router: Router,
      public dataService: DataService,
   ) { }

   ngOnInit() {
      this.dataService.getQuestions()
         .subscribe(mockQs => {
            this.mockQuestions = mockQs;
            console.log('mockQs ', this.mockQuestions);
         });

      this.dataService.getStudents()
         .subscribe(stu => this.allStudents = stu);
   }

   onChange(q: Question, isChecked: boolean) {
      if (this.selectAll) {
         this.selectAll = false;
         this.assignmentQuestions = [];
      }
      if (isChecked) {
         console.log(q.qId, ' Checked', );
         this.assignmentQuestions.push(q);
      } else {
         console.log(q.qId, ' Unchecked', )
         let index = this.assignmentQuestions.findIndex(x => x.qId === q.qId)
         let rem = this.assignmentQuestions.splice(index, 1);
      }

      console.log('Questions in array ', this.assignmentQuestions.length, this.mockQuestions.length);
   }

   onSelectAll(allChecked: boolean) {
      this.selectAll = allChecked;
      if (allChecked) {
         this.assignmentQuestions = [];
         this.mockQuestions.map(x => this.assignmentQuestions.push(x));
      } else {
         this.assignmentQuestions = [];
      }
      console.log('Select All ', this.assignmentQuestions.length);
   }

   onChangeStudents(s: Student, isChecked: boolean) {
      if (this.selectAllStudents) {
         this.selectAllStudents = false;
         this.assignStudents = [];
      }
      if (isChecked) {
         this.assignStudents.push(s);
      } else {
         let index = this.assignStudents.findIndex(x => x.sId === s.sId)
         let rem = this.assignStudents.splice(index, 1);
      }
   }

   onSelectAllStudents(allStudentsChecked: boolean) {
      this.selectAllStudents = allStudentsChecked;
      if (allStudentsChecked) {
         this.assignStudents = [];
         this.allStudents.map(x => this.assignStudents.push(x));
      } else {
         this.assignStudents = [];
      }
   }

   assign() {
      this.assignStudents.map(stu => {
         stu.assignedQuestions = this.assignmentQuestions;
      })

      this.dataService.updateAssigned(this.assignStudents)
      .subscribe(x =>{
         if(x === 'success') {
            alert('Questions assigned Succesfully');
         } else {
            alert('Questions could not be assigned. Please try again.');
         }

         console.log('Callback ',x)
      })
   }

   redirectAddQuestion() {
      this.router.navigate(['add-question']);
   }
}
