import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import ('./admin-pro/admin-pro.module').then(x => x.AdminProModule)
  },
  {
    path: 'login',
    loadChildren: () => import ('./auth/auth.module').then(x => x.AuthModule)
  },
  {
    path: '**', component: NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
