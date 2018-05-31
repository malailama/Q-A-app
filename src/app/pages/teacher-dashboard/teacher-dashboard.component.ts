import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../../models/models';
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

  constructor(
     public router: Router,
     public dataService: DataService,
  ) { }

  ngOnInit() {
   this.dataService.getQuestions()
      .subscribe(mockQs => this.mockQuestions = mockQs );
  }

  onChange(q: Question, isChecked: boolean) {
     if (this.selectAll) {
        this.selectAll = false;
        this.assignmentQuestions = [];
     }
      if (isChecked) {
         console.log(q.qId,' Checked', );
         this.assignmentQuestions.push(q);
      } else {
         console.log(q.qId,' Unchecked', )
         let index = this.assignmentQuestions.findIndex(x => x.qId === q.qId)
         let rem = this.assignmentQuestions.splice(index, 1);
      }

      console.log('Questions in array ', this.assignmentQuestions.length, this.mockQuestions.length);
  }

  onSelectAll (allChecked: boolean) {
     this.selectAll = allChecked;
     if(allChecked) {
        this.assignmentQuestions = [];
        this.mockQuestions.map(x => this.assignmentQuestions.push(x));
     } else {
        this.assignmentQuestions = [];
     }
     console.log('Select All ', this.assignmentQuestions.length);
  }

  redirectAddQuestion() {
     this.router.navigate(['add-question']);
  }
}
