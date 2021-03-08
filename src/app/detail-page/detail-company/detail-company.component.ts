import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from "../../company.service";

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit {

  company: any;
  detail: any;
  locationList: any;
  types: any;

  constructor(
    private Company: CompanyService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.Company.currentCompany.subscribe(
      (company) => this.company = company
    );
    this.receive();
  }

  async receive() {
    await this.http.get<any[]>(`https://www.themuse.com/api/public/companies/${this.company}`).subscribe(
      (detail) =>{ this.detail = detail; this.locationList = this.detail.locations; this.types = this.detail.industries},
      (error : any) => console.log(error)
    )
  }

}
