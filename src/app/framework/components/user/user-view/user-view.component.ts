import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { User } from '../../../../entity/user.entity'
import { getAllUsers, getUsersLoading } from '../../../../presentation/user/user.selectors'
import { DeleteUser } from '../../../../presentation/user/user.actions'
import { State } from '../../../../presentation'

@Component({
  selector: 'user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'skill', 'action']
  loading$: Observable<boolean>
  user$: Observable<User[]>

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getUsersLoading))
    this.user$ = this.store.pipe(select(getAllUsers))
  }

  delete(user: User) {
    // Todo: show modal that prompts for delete
    this.store.dispatch(new DeleteUser({ user: user }))
  }
}
