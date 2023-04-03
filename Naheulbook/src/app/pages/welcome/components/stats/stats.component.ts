import { Component, Input } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  _nbrCharacter! : number

  @Input() set nbrCharacter(nbrCharacter : number){
    this._nbrCharacter = nbrCharacter
  }

  get nbrCharacter(){
    return this._nbrCharacter
  }

}
