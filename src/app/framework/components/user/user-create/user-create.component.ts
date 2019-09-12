import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { User } from '../../../../entity/user.entity'
import { CreateUser } from '../../../../presentation/user/user.actions'
import { getUsersLoading } from '../../../../presentation/user/user.selectors'
import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {

  loading$: Observable<boolean>
  form: FormGroup

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getUsersLoading))
    this.clearForm()
  }

  clearForm() {
    this.form = new FormGroup({
      // TODO: Add required fields
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      skill: new FormControl(null, Validators.required),
    })
  }

  validate() {
    if (this.form.valid) this.uploadUser()
    else validateFields(this.form)
  }

  uploadUser() {
    let user: User = {
      id: '',
      created: new Date(),
      updated: new Date(),
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      skill: this.form.controls.skill.value,
    }

    this.store.dispatch(new CreateUser({ user: user }))
  }
}
