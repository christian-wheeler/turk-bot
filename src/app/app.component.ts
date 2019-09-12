import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './presentation';
import { LoadUsers } from './presentation/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'knowledge';

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers())
  }
}
