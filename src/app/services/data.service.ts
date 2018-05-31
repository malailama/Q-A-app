import { Injectable } from '@angular/core';
import { Question, Student } from '../models/models';
import { MOCKQS, MOCKSTUDENTS } from '../models/mock-data';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
     return of(MOCKQS);
  }

  addQuetion(newQ) {
     MOCKQS.push(newQ);
  }

  getStudents(): Observable<Student[]> {
     return of(MOCKSTUDENTS);
  }

  updateStudent(stud: Student): Observable<any> {
     let callback: string;
      MOCKSTUDENTS.map( st => {
         if(st.sId === stud.sId){
            console.log('Student found')
            st.assignedQuestions = stud.assignedQuestions;
            callback = 'success';
         } 
      })
      console.log('Student Updated: ', MOCKSTUDENTS);
      return of(callback);
  }
}
