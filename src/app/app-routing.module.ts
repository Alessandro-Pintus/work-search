import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { DetailCompanyComponent } from './detail-page/detail-company/detail-company.component';

const routes: Routes = [
  { path: 'search-engineering-works', component: SearchPageComponent},
  { path: 'details-work/:id', component: DetailPageComponent,
  children: [

  { path: 'company', component: DetailCompanyComponent, outlet: 'detail' }]},
  { path: '',   redirectTo: '/search-engineering-works', pathMatch: 'full' },
  { path: '**', component: SearchPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
