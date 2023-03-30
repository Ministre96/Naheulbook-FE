import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { StatsComponent } from './components/stats/stats.component';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderComponent } from '../admin/header/header.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    CoreModule,
  ]
})
export class WelcomeModule { }
