import { Entity } from '@ascendedco/architecture'

export interface User extends Entity {
  name: string
  surname: string
  skill: string
}
