import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url : string = environment.url

  constructor(
    private $client : HttpClient
  ) { }

  getAll() : Observable<Job[]>{
    return this.$client.get<Job[]>(this.url+"/jobs");
  }

  create(job : Job) : Observable<void>{
    return this.$client.post<void>(this.url+"/jobs", job)
  }

  getOne(id : number) : Observable<Job>{
    return this.$client.get<Job>(this.url+"/jobs/"+id)
  }
  
}
