import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCharacterComponent } from './components/small-character/small-character.component';
import { ListSCharacterComponent } from './components/list-scharacter/list-scharacter.component';



@NgModule({
  declarations: [
    SmallCharacterComponent,
    ListSCharacterComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListSCharacterComponent
  ]
})
export class CoreModule {

 }
