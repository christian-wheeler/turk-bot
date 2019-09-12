import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCreateComponent } from './framework/components/user/user-create/user-create.component';
import { UserEditComponent } from './framework/components/user/user-edit/user-edit.component';
import { UserViewComponent } from './framework/components/user/user-view/user-view.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatTableModule, MatToolbarModule,
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './presentation';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FirebaseUserNetwork } from './network/firebase/firebase.user.network';
import { UserNetwork } from './domain/gateways/network/user.network';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterSerializer } from './presentation/router/router.selectors';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserEditComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreRouterConnectingModule.forRoot(),

    // Material
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: RouterSerializer },
    { provide: UserNetwork, useClass: FirebaseUserNetwork }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
