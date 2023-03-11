import { Characteristic } from "./characteristic.model"
import { Skill } from "./skill.model"

export interface Origin {
    id? : number,
    name : string
    description : string
    requierement? : Characteristic[]
    heritSkills : Skill[]
    choiceSkills : Skill[]
}