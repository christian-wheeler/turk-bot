import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'

import { User } from '../../../../entity/user.entity'
import { UpdateUser } from '../../../../presentation/user/user.actions'
import { getCurrentUser, getUsersLoading } from '../../../../presentation/user/user.selectors'
import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  loading$: Observable<boolean>
  user$: Observable<User>
  form: FormGroup

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.clearForm()
    this.user$ = this.store.pipe(select(getCurrentUser), tap(user => this.updateForm(user)))
    this.loading$ = this.store.pipe(select(getUsersLoading))
  }

  clearForm() {
    this.form = new FormGroup({
      // TODO: Add required fields
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      skill: new FormControl(null, Validators.required),
    })
  }

  updateForm(user: User) {
    if (user !== null) this.form.patchValue({
      // name: user.name,
      // TODO: Add required fields
      name: user.name,
      surname: user.surname,
      skill: user.skill,
    })
  }

  validate(user: User) {
    if (this.form.valid) this.uploadUser(user)
    else validateFields(this.form)
  }

  uploadUser(user: User) {
    let updated: User = {
      ...user,
      // name: this.form.controls['name'].value,
      // TODO: Add required fields
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value,
      skill: this.form.controls.skill.value,
    }

    this.store.dispatch(new UpdateUser({ user: updated }))
  }
}
