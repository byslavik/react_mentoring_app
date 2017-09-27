interface action {
  type: string;
  payload?: any;
}


export function sort (state:string = 'rating', action:action) {
  if (action.type === 'SORT_FILMS') {
    return action.payload
  }
  return state;
}