interface action {
  type: string;
  payload: string;
}


export function searchMethod (state:string = 'movie', action:action):string {
  if (action.type === 'CHANGE_METHOD') {
    return action.payload
  }
  return state;
}