import { Characteristic } from "./characteristic.model"
import { Customer } from "./customer.model"
import { Job } from "./job.model"
import { Origin } from "./origin.model"
import { Skill } from "./skill.model"

export interface Character {
    id? : number
    firstName? : string
    lastName? : string
    sexe? : string
    gold? : number
    fate? : number
    characteristics? : Characteristic[]
    job? : Job
    origin? : Origin
    skills? : Skill[]
    creator? : Customer
}