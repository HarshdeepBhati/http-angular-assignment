import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './http/http.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
const routes: Routes = [
  {path: '',redirectTo: 'http', pathMatch: 'full'},
  {path: 'http',component:HttpComponent},
  {path: 'page2', component:Page2Component},
  {path: 'page3', component:Page3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
