export interface urlParams {
  type: 'search' | 'movie' | 'person';
  method?: 'person' | 'movie';
  query: string;
}

export interface sortFields { 
  fields: 'vote_count' | 'popularity'
}