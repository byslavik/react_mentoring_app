import {searchMethod} from '../models/common.models'

interface action {
  type: string;
  payload: any
}


export function searchMethod (state:searchMethod = 'movie', action:action):string {
  switch (action.type) {
    case  'CHANGE_METHOD':
      return action.payload.params;
    default:
      return state;
  }
}