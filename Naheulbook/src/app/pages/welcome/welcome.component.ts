import { Component } from '@angular/core';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  characters : Character[] = []

  constructor(
    private $characterService : CharacterService
  ){

  }
  ngOnInit(){
    this.loadItems()
  }

  loadItems(){
    this.$characterService.getAll().subscribe((data : Character[]) => {
      console.log(data)
      this.characters = data
    })
  }

}
