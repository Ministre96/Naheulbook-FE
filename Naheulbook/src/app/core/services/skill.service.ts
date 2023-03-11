import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private url : string = environment.url
  
  constructor(
    private $client : HttpClient
  ) { }

  getAll() : Observable<Skill[]>{
    return this.$client.get<Skill[]>(this.url+"/skills")
  }

  create(skill : Skill) : Observable<void>{
    return this.$client.post<void>(this.url+"/skills",skill)
  } 
  
}
