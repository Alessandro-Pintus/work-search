import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  private Company = new BehaviorSubject([]);
  currentCompany = this.Company.asObservable();

  setCompany(company: any) {
    this.Company.next(company);
  }

  getCompany(): Observable<any> {
    return this.currentCompany;
  }

}
