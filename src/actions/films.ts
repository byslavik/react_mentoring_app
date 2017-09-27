export const getFilmsByQuery = (type:string, query:string, dispatchType:string) => (dispatch:any) => {
  const link = `https://netflixroulette.net/api/api.php?${type}=${query}`;
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
                    
                    resolve(data);
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
export const getFilmsByTitle = getFilmsByQuery.bind(this, 'title');