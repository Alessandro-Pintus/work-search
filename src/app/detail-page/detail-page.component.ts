import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { map ,tap } from 'rxjs/operators';
import { Location } from "@angular/common";
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {


  constructor(
    private Data: DataService,
    private route: ActivatedRoute,
    private Company: CompanyService,
    private location: Location) {}

  id:string;
  i:number;
  newData: any;
  data: string;
  company: any;
  textbox:any;

  ngOnInit() {
    this.Data.currentData.subscribe(
      (newData) => this.newData = newData,

    )

    this.route.paramMap
      .pipe(map(params => params.get('id')), tap(id => (this.id = id)))
      .subscribe(i => { this.i = i['id']}
    );
    this.data= this.newData[this.id].contents.toString().replace(/<[^>]*>/g, ' ');
    this.company = this.newData[this.id].company.id;
  }

  setCompany () {
    this.Company.setCompany(this.company)
  }

  goBack(): void {
    this.location.back()
  }

  companyDetail() {
    this.setCompany()
  }

}
