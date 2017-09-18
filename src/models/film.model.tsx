export interface Film {
  show_id: number,
  show_title: string,
  release_year: string,
  rating: string,
  category: string,
  show_cast: string,
  director: string,
  summary: string,
  poster: string,
  runtime: string
}
export interface FilmState {
  item: Film;
}

export interface FilmProps {
  item: Film;
  key?: number;
}