import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Skill } from 'src/app/core/models/skill.model';
import { SkillService } from 'src/app/core/services/skill.service';

@Injectable()
export class SkillResolver implements Resolve<Skill> {

  constructor(
    private $skillService : SkillService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill> {
    return this.$skillService.getOne(route.params["id"]);
  }
}
