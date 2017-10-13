import {Film} from './film.model'

export interface Person {
  id: number,
  name: string,
  popularity: string,
  profile_path: string,
  known_for: Film[]
}
