import { Gateway } from '@ascendedco/architecture'
import { User } from '../../../entity/user.entity'

export abstract class UserNetwork extends Gateway<User> {

}
