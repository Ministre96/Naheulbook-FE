import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms"

export class FormGroupValidator {
    static sameList(input1: string[], input2: string[], msg: string = 'List1 and List2 is not the same'): ValidatorFn {
        return (control: AbstractControl) => {

            const fg: FormGroup = control as FormGroup
            let verif : Boolean = false

            const value1 = fg.get(input1)?.value
            const value2 = fg.get(input2)?.value
            value1.forEach((element1: string) => {
                value2.forEach((element2 : string) => {
                    if(element1 == element2){
                        verif = true
                    }
                });
            });

            if (verif) {
                const errors = fg.get(input1)?.errors
                fg.get(input1)?.setErrors({ ...errors, 'same': `${input1} is not different from ${input2}` })
                return { 'same': `${msg}` }
            }

            return null
        }
    }
}