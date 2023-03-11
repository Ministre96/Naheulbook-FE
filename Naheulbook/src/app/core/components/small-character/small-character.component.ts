import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-small-character',
  templateUrl: './small-character.component.html',
  styleUrls: ['./small-character.component.scss']
})
export class SmallCharacterComponent {
  @Input() character : Character | undefined
  
}
