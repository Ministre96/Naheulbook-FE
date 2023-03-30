import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Origin } from 'src/app/core/models/origin.model';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class OriginAdminService {

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  delete(id : number): Observable<void>{
    console.log("delete "+ id)
    return this.$client.delete<void>(this.url+"/origins/"+id)
  }

  update(origin : Origin) : Observable<void>{
    return this.$client.put<void>(this.url+"/origins/"+origin.id, origin)
  }
}
