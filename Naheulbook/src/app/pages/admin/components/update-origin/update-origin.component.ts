import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Origin } from 'src/app/core/models/origin.model';
import { Skill } from 'src/app/core/models/skill.model';
import { OriginAdminService } from '../../services/origin-admin.service';
import { MatSelectDirective } from 'src/app/shared/materialize/directives/mat-select.directive';
import { SkillService } from 'src/app/core/services/skill.service';
import { Characteristic } from 'src/app/core/models/characteristic.model';

@Component({
  selector: 'app-update-origin',
  templateUrl: './update-origin.component.html',
  styleUrls: ['./update-origin.component.scss']
})
export class UpdateOriginComponent {
  origin! : Origin
  fg! : FormGroup
  skills : Skill[] =[]
  tempChar : Characteristic[] = []

  @ViewChildren(MatSelectDirective) private _matSelects: QueryList<MatSelectDirective> = new QueryList<MatSelectDirective>()
  
  constructor(
    private $formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router : Router,
    private $originAdminService : OriginAdminService,
    private $skillService : SkillService
  ){
    route.data.subscribe((data : any) => {
      this.origin = data.currentOrigin
      console.log(this.origin)
    })
  }

  ngOnInit(){
    
    this.loadItems()
    this.initForm()
    this._matSelects.forEach(select => select?.init())
  }

  loadItems(){
    this.$skillService.getAll().subscribe((data : Skill[]) => {
      this.skills = data
    })
    this._matSelects.forEach(select => select?.init())
  }

  initForm(){
    this.fg = this.$formBuilder.group({
      name : [ this.origin.name, Validators.minLength(2)],
      description : [this.origin.description, Validators.minLength(2)],
      heritatedSkill : [this.origin.heritatedSkill ],
      skillToChoose : [/*FormGroupValidator.sameList() ajout condition list skill1 =/= list skill2*/]
    })
  }

  // isSkillAlreadySelected(skill: any) : boolean {
  //   console.log(this.origin.heritatedSkill)
  //   const temp = this.origin.heritatedSkill.find(s => s.id === skill.id)
  //   console.log(temp)
  //  if (temp) {
  //   return true;
  //  }
  //  return false;
  // }

  updateOrigin(){
    let newOrigin : Origin = {
      id : this.origin.id,
      name : this.fg.value["name"],
      description : this.fg.value["description"],
      requierement : this.tempChar,//A MODIFIER 
      heritatedSkill : this.fg.value["heritatedSkill"],
      skillToChoose : this.fg.value["skillToChoose"]
    }
    this.$originAdminService.update(newOrigin).subscribe(() => {
      M.toast({html: 'Origin updated', classes: 'rounded'})
      this.router.navigate(['admin/modify/origins'])
    })
  }
}

