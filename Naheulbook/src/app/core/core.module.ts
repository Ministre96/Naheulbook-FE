import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCharacterComponent } from './components/small-character/small-character.component';
import { ListSCharacterComponent } from './components/list-scharacter/list-scharacter.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SmallCharacterComponent,
    ListSCharacterComponent,
    ClientHeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListSCharacterComponent,
    ClientHeaderComponent
  ]
})
export class CoreModule {

 }
