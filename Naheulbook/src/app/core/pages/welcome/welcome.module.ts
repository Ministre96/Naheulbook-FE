import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { StatsComponent } from './components/stats/stats.component';
import { CoreModule } from '../../core.module';
import { ListSCharacterComponent } from '../../components/list-scharacter/list-scharacter.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    CoreModule
  ]
})
export class WelcomeModule { }
