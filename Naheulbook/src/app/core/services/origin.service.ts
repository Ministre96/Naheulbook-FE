import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Origin } from '../models/origin.model';

@Injectable({
  providedIn: 'root'
})
export class OriginService {
  private url : string = environment.url

  constructor(
    private $client : HttpClient
  ) { }

  getAll() : Observable<Origin[]>{
    return this.$client.get<Origin[]>(this.url+"/origins")
  }

  create(origin : Origin) : Observable<void>{
    return this.$client.post<void>(this.url+"/origins", origin)
  }
}
