import * as React from 'react';

import {FilmCard} from './FilmCard';
import {NoItems} from './NoItems';
import * as s from './FilmList.css';
import {testData} from './testdata';

export  class FilmList extends React.Component<any> {
  buildCards(data: Array<any>) {
    return data.map((item: Object, index) => {
      return <FilmCard key={index} item={item} /> 
    })
  }

  render() {
    const cards:Array<any> = this.buildCards(testData);
    
    return <div className={s.filmList}>
      {cards.length != 0 ? cards : <NoItems/> }
    </div> 
  }
}
