import { FormGroup } from '@angular/forms';

export function checkLength(){
    return function (abc: FormGroup) {
        let x = abc.controls.contact;

        if(x.errors && !x.errors.lengthErr)
        {
            return;
        }
        
        if(x.value.length < 10 || x.value.length > 10)
        {
            x.setErrors({ lengthErr : true })
        }
        else{
            
            x.setErrors(null)
        }
        
    }
}


export function checkNum(){
    return function(myForm:FormGroup){
        var x = myForm.controls.contact;
        if (x.errors && !x.errors.checkNumErr)
        {
            return;
        }
        
        if(isNaN(x.value))
        {
            x.setErrors({ checkNumErr : true });
        }
        else{
            x.setErrors(null);
        }
    }
}