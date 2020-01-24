import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { CrudComponent } from '../crud/crud.component';
import { LoginComponent } from '../login/login.component'

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "crud", component: CrudComponent },
  { path: "", component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class RouteModule { }
