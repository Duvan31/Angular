import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'quienessomos', component: QuienesComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
