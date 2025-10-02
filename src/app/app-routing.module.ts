import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';

const routes: Routes = [
  // Apenas português como padrão
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ArchiveComponent },

  // Redireciona qualquer rota com /en ou /es para /
  { path: 'en', redirectTo: '', pathMatch: 'full' },
  { path: 'en/proyectos', redirectTo: 'proyectos', pathMatch: 'full' },
  { path: 'es', redirectTo: '', pathMatch: 'full' },
  { path: 'es/proyectos', redirectTo: 'proyectos', pathMatch: 'full' },

  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
