import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

import { UserNetwork } from '../../domain/gateways/network/user.network'
import { FirebaseNetworkGateway } from '@ascendedco/architecture'
import { User } from '../../entity/user.entity'

@Injectable()
export class FirebaseUserNetwork extends FirebaseNetworkGateway<User> implements UserNetwork {

  constructor(firestore: AngularFirestore) {
    // TODO: Replace user with the correct path
    super(firestore, 'users')
  }
  
}

