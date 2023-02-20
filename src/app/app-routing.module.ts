import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pagina2Component} from "./pagina2/pagina2.component";
import {Pagina4Component} from "./pagina4/pagina4.component";
import {Pagina3Component} from "./pagina3/pagina3.component";
import {Pagina5Component} from "./pagina5/pagina5.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'home',component:AppComponent },
  { path: 'pagina2',component:Pagina2Component },
  { path: 'pagina3',component:Pagina3Component },
  { path: 'pagina4',component:Pagina4Component },
  { path: 'pagina5',component:Pagina5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
