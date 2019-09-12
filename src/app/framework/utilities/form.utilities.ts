import { FormControl, FormGroup } from '@angular/forms'

export const validateFields = (form: FormGroup) => {
  Object.keys(form.controls).forEach(field => {
    // console.log(field);
    const control = form.get(field)
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true })
    }
    else if (control instanceof FormGroup) {
      this.validateFields(control)
    }
  })
}
