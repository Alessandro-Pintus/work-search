import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Data = new BehaviorSubject([]);
  currentData = this.Data.asObservable();

  setData(newData: any) {
    this.Data.next(newData);
  }

  getData(): Observable<any> {
    return this.currentData;
  }

  getWork(i: number): Observable<any> {
    return this.currentData;
  }

}

