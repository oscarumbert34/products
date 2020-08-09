import { AbstractFormGroupDirective, ValidationErrors, AbstractControl } from '@angular/forms';

export class Validation {

    static valueAndSaleValue(controlValue: AbstractControl) : ValidationErrors  {
        if((controlValue.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace: true}
        }
  
        return null;
    }
}