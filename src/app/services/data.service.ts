import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question, Student } from '../models/models';
import { MOCKQS, MOCKSTUDENTS } from '../models/mock-data';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable()
export class DataService {

   private questionsUrl = 'api/mquestions';
   private studentsUrl = 'api/mstudents';

   private allQuestions: Question[] = [];
   private allStudents: Student[] = [];

   constructor(
      private http: HttpClient,
   ) { }

   getQuestions(): Observable<Question[]> {
      //   return of(MOCKQS);
      return this.http.get<Question[]>(this.questionsUrl)
         .pipe(
            catchError(this.handleError('getQuestions', []))
         )
   }

   addQuestion(newQ): Observable<Question> {
      // MOCKQS.push(newQ);
      return this.http.post<Question>(this.questionsUrl, newQ, httpOptions)
      .pipe(
         catchError(this.handleError<Question>('addQuestion'))
      )
   }

   getStudents(): Observable<Student[]> {
      //   return of(MOCKSTUDENTS);
      return this.http.get<Student[]>(this.studentsUrl)
      .pipe(
         catchError(this.handleError('getStudents', []))
      )
   }

   updateStudent(stud: Student): Observable<Student> {
      return this.http.put<Student>(this.studentsUrl, stud, httpOptions)
   }

   updateAssigned(studs: Student[]): Observable<any> {
      // return this.http.put(this.studentsUrl, studs, httpOptions)
      let callback: string;
      studs.map(st => {
         MOCKSTUDENTS.map(s => {
            if (st.id === s.id) {
               s.assignedQuestions = st.assignedQuestions;
               callback = 'success';
            }
         })
      })
      // console.log('Student Updated: ', MOCKSTUDENTS);
      return of(callback);
   }

   private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

         console.error(error);
         return of(result as T);
      };
   }
}
