export type sortFields = 'vote_count' | 'popularity';
export type searchMethod = 'person' | 'movie'

export interface urlParams {
  type: 'search' | 'movie' | 'person';
  method?: searchMethod;
  query: string;
}
export interface action {
  type: string;
  payload: any;
}
