import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Origin } from 'src/app/core/models/origin.model';
import { OriginService } from 'src/app/core/services/origin.service';

@Injectable()
export class OriginResolverResolver implements Resolve<Origin> {
  constructor(
    private $originService : OriginService){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Origin> {
    return this.$originService.getOne(route.params["id"]);
  }
}
