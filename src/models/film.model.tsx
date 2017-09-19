// Separate page for film

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
}
export interface FilmProps {
  item: Film;
}

// Film cards
export interface FilmCardState {
}
export interface FilmCardProps {
  item: Film;
  key?: number;
}

// Film cards list
export interface FilmCardListState {
}
export interface FilmCardListProps {
  data: Film[];
}

// Film counter
export interface FilmCounterState {
}
export interface FilmCounterProps {
  count: number;
}