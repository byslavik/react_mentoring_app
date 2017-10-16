interface action {
  type: string;
  payload: string;
}


export function sort (state:string = 'popularity', action:action):string {
  switch (action.type) {
    case  'SORT_FILMS':
      return action.payload;
    default:
      return state;
  }
}