import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaChartComponent } from './pagina-chart/pagina-chart.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'grafico', component: PaginaChartComponent }
];

@NgModule({
  declarations:[],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
