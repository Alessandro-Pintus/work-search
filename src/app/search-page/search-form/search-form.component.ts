import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { DataService } from "../../data.service";

import {cities} from "../../cities.json";



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  searchForm = this.fb.group({
    city: ['Italy'],
    level: this.fb.group({
      Entry_Level: [true],
      Mid_Level: [true],
      Senior_Level: [true],
      Management: [true],
      Internship: [true]
    }),
  });

  @Output() setResult: EventEmitter<any> = new EventEmitter<any>();

  public result(parsedJson: any) {
     this.setResult.emit(parsedJson);
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private Data: DataService
    ) { this.apy_key = environment.APY_KEY;
  }

  Cities = cities;

  Levels = [
    {name:'Entry Level', value:'&level=Entry%20Level' }, {name:'Mid Level', value:'&level=Mid%20Level'},{name:'Senior Level', value:'&level=Senior%20Level'},{name:'Management', value:'&level=management'},{name:'Internship', value:'&level=Internship'
  }]

  parsedJson: any;
  data: any;
  apy_key: string;
  city: string;
  citys: string;
  entry: string;
  mid: string;
  senior: string;
  management: string;
  internship: string;

  async onSubmit() {
    let selectCity = this.searchForm.value.city;
    let selectLevel = this.searchForm.value.level;

    if (selectLevel.Entry_Level == false) {
      this.entry = '';
    } else if (selectLevel.Entry_Level = true){
        this.entry = this.Levels[0].value
    }

    if (selectLevel.Mid_Level == false) {
      this.mid = '';
    } else if (selectLevel.Mid_Level = true) {
      this.mid = this.Levels[1].value
    }

    if (selectLevel.Senior_Level == false) {
      this.senior = '';
    } else if (selectLevel.Senior_Level = true) {
      this.senior = this.Levels[2].value
    }

    if (selectLevel.Management == false) {
      this.management = '';
    } else if (selectLevel.Management = true) {
      this.management = this.Levels[3].value
    }

    if (selectLevel.Internship == false) {
      this.internship = '';
    } else if (selectLevel.Internship = true) {
      this.internship = this.Levels[4].value
    }

    if (selectCity != undefined) {
      this.city = selectCity;
      this.citys = this.city.replace(',', '%2C')
    } else if (selectCity = undefined) {
      this.city = '';
    }

    let formData: any = new FormData();
    this.http.get<any[]>(`https://www.themuse.com/api/public/jobs?category=Software%20Engineer${this.entry}${this.mid}${this.senior}${this.management}${this.internship}&location=${this.citys}&page=1&api_key=${this.apy_key}`, formData).subscribe(
      (data) => {this.data = data; this.parsedJson = data; this.result(this.parsedJson = this.data.results); console.log(this.data) },
      (error: any) => console.log(error)
    )
  }
}

