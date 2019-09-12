import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './framework/components/user/user-view/user-view.component';
import { UserCreateComponent } from './framework/components/user/user-create/user-create.component';
import { UserEditComponent } from './framework/components/user/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserViewComponent
  },
  {
    path: 'users/new',
    component: UserCreateComponent
  },
  {
    path: 'users/:id',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
