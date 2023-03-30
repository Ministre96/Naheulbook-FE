import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Job } from 'src/app/core/models/job.model';
import { JobService } from 'src/app/core/services/job.service';

@Injectable()
export class JobResolverResolver implements Resolve<Job> {
  constructor(
    private $jobService : JobService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job> {
    return this.$jobService.getOne(route.params["id"]);
  }
}
