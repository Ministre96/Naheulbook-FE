import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './core/pages/admin/admin.component';
import { WelcomeComponent } from './core/pages/welcome/welcome.component';
import { WelcomeModule } from './core/pages/welcome/welcome.module';

const routes: Routes = [
  {path : '', component : WelcomeComponent },
  {path : 'admin', loadChildren: () => import('./core/pages/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
