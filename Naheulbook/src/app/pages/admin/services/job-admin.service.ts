import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/core/models/job.model';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class JobAdminService {

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  delete(id : number): Observable<void>{
    return this.$client.delete<void>(this.url+"/jobs/"+id)
  }

  update(job : Job) : Observable<void>{
    return this.$client.put<void>(this.url+"/jobs/"+job.id, job)
  }
}
