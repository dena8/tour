import { FormGroup } from '@angular/forms';
export function dateInTheFutureValidator( startDate:string){
    return (formGroup:FormGroup)=>{
        const startDateControl = formGroup.controls[startDate];
        const date = new Date(startDateControl.value);       

        if(date<= new Date()){
            startDateControl.setErrors({startDateMismatch:true})

        }else{
            startDateControl.setErrors(null)
        }
    }
}