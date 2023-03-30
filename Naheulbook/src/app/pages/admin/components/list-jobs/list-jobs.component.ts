import { Component } from '@angular/core';
import { Job } from 'src/app/core/models/job.model';
import { JobService } from 'src/app/core/services/job.service';
import { JobAdminService } from '../../services/job-admin.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.scss']
})
export class ListJobsComponent {
  jobs! : Job[]

  constructor(
    private $jobService : JobService,
    private $jobAdminService : JobAdminService
    ) {}

  ngOnInit(){
    this.loadList()
  }

  loadList(){
    this.$jobService.getAll().subscribe((data : Job[]) => 
    this.jobs = data)
  }

  delete(id : number){
    console.log("delete " + id)
    this.$jobAdminService.delete(id).subscribe()
    this.loadList()
  }
}
