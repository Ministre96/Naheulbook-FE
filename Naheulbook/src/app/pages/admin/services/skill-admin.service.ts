import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/core/models/skill.model';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillAdminService {

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  delete(id : number): Observable<void>{
    console.log("delete "+ id)
    return this.$client.delete<void>(this.url+"/skills/"+id)
  }

  update(skill : Skill) : Observable<void>{
    console.log(skill)
    return this.$client.put<void>(this.url+"/skills/"+skill.id, skill)
  }
}
