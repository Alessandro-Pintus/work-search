import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchFormComponent } from './search-page/search-form/search-form.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailCompanyComponent } from './detail-page/detail-company/detail-company.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchFormComponent,
    DetailPageComponent,
    DetailCompanyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
