import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Character } from '../models/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url : string = environment.url

  constructor(
    private $client : HttpClient
  ) { }

  getAll() : Observable<Character[]> {
    return this.$client.get<Character[]>(this.url+"/characters")
  }

  create(character : Character) : Observable<void> {
    return this.$client.post<void>(this.url+"/characters", character)
  }
}
