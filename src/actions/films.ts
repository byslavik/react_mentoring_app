import {urlGenerator} from './../utilities';

import {urlParams} from './../models/common.models'; 


export const getFilmsByQuery = (urlParams: urlParams, dispatchType:string) => (dispatch:any) => {
  const link = urlGenerator(urlParams);
  const promise = new Promise((resolve:any, reject:any) => {
            fetch(link)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if(data.errorcode) {
                      reject(data);
                      return;
                    }
                    
                    resolve(data.results ? data.results : data);
                })
                .catch((err) => {
                    reject(err)
                });
        });

        promise.then((result:any) => {
            console.log('data loaded');
            dispatch({ type: `${dispatchType}_SUCCESS`, payload: result }); 
            
        }, (error:any) => {
            dispatch({ type: `${dispatchType}_FAILED`, payload: error });
        });
}