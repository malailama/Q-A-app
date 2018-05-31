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
}
