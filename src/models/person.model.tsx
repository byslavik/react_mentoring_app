import {Film} from './film.model'

export interface Person {
  vote_count: number,
  id: number,
  video: boolean,
  vote_average: number,
  title: string,
  popularity: number,
  poster_path: string,
  original_language: string,
  original_title: string,
  genre_ids: number[],
  backdrop_path: string,
  adult: boolean,
  name: string,
  profile_path: string,
  overview: string,
  release_date: string
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