import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class JobAdminService {

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  delete(id : number) : Observable<void> {
    return this.$client.delete<void>(this.url+"jobs/"+id)
  }
}
