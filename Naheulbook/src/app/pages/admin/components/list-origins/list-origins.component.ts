import { Component } from '@angular/core';
import { Origin } from 'src/app/core/models/origin.model';
import { OriginService } from 'src/app/core/services/origin.service';

@Component({
  selector: 'app-list-origins',
  templateUrl: './list-origins.component.html',
  styleUrls: ['./list-origins.component.scss']
})
export class ListOriginsComponent {
  orgins! : Origin[]

  constructor(private $originService : OriginService) {}

  ngOnInit(){
    this.loadList()
    setTimeout(() => {
      console.log(this.orgins);
    }, 1000);
  }

  loadList(){
    this.$originService.getAll().subscribe((data : Origin[]) => 
    this.orgins = data)
  }
}

