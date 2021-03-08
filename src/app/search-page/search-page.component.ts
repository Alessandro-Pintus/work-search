import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {


  i: number;
  data: any;
  newData: any;

  receiveResult(parsedJson: any) {
    this.data = parsedJson;
  }

  constructor(
    private route: ActivatedRoute,
    private Data: DataService
    ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => this.i = params['i']);
    this.Data.currentData.subscribe(newData => this.newData = newData);
  }

  setData() {
    this.Data.setData(this.data)
  }

  // life cycle hooks

  getWork(): void {
    let i = +this.route.snapshot.paramMap.get('i');
    this.newData.getWork(i)
    console.log('Send');
  }

  details() {
    this.setData()
  }


}
