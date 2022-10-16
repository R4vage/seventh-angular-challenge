import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

export class UserValidators {
  static GreaterThanToday(control: FormControl): ValidationErrors | null {
    let today = new Date();
    if (new Date(control.value) > today) return { greaterThanToday: true };
    return null;
  }

/*   static CheckPasswords(group: FormGroup): ValidationErrors | null {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  } */  /* Simpler to just use pattern validation, and mix template inside. */
}
