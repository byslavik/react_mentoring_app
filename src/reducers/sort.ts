interface action {
  type: string;
  payload: string;
}


export function sort (state:string = 'popularity', action:action):string {
  if (action.type === 'SORT_FILMS') {
    return action.payload
  }
  return state;
}