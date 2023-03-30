import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { CreateCharComponent } from './create-char.component';

const routes: Routes = [
  {path : '', component : CreateCharComponent, children : [
    {path : '', component : CreateComponent},
  ]

  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCharRoutingModule { }
