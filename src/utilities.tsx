import {SETTINGS} from './settings';
import {urlParams} from './models/common.models'; 


export function urlGenerator(params:urlParams) {
  if(params.type == 'movie') {
    return SETTINGS.apiUrl + params.type + '/' + params.query + '?api_key=' + SETTINGS.apiKey ; 
  }

  return SETTINGS.apiUrl + params.type + '/' + params.method  + '?api_key=' + SETTINGS.apiKey + '&query=' + params.query; 
}