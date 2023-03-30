import { Component } from '@angular/core';
import { Origin } from 'src/app/core/models/origin.model';
import { OriginService } from 'src/app/core/services/origin.service';
import { OriginAdminService } from '../../services/origin-admin.service';

@Component({
  selector: 'app-list-origins',
  templateUrl: './list-origins.component.html',
  styleUrls: ['./list-origins.component.scss']
})
export class ListOriginsComponent {
  orgins! : Origin[]

  constructor(
    private $originService : OriginService,
    private $originAdminService : OriginAdminService
    ) {}

  ngOnInit(){
    this.loadList()
  }

  loadList(){
    this.$originService.getAll().subscribe((data : Origin[]) => 
    this.orgins = data)
  }

  delete(id : number){
    console.log("delete " + id)
    this.$originAdminService.delete(id).subscribe();
    this.loadList()
  }
}

