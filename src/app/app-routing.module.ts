import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) }

 ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }
