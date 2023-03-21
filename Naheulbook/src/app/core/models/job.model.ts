import { Characteristic } from "./characteristic.model"
import { Origin } from "./origin.model"
import { Skill } from "./skill.model"

export interface Job {
    id? : number
    name : string
    description : string
    requierement? : Characteristic[]
    bannedOrigin : Origin[]
    heritatedSkill : Skill[]
    skillToChoose : Skill[]
}