import {Film} from './film.model'

export interface Person extends Film {
  vote_count: number,
  id: number,
  vote_average: number,
  popularity: number,
  poster_path: string,
  backdrop_path: string,
  name: string,
  profile_path: string,
  overview: string,
  [key: number]: number
}

export interface FullPerson {
  biography: string,
  birthday: string,
  homepage: string,
  id:number,
  imdb_id: string,
  name: string,
  place_of_birth: string,
  popularity:number,
  profile_path: string,
}