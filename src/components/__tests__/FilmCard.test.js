import * as React from 'react';
import {FilmCard} from '../FilmCard.tsx';
import * as renderer from 'react-test-renderer';
import {filmData} from './testData'

jest.mock('react-router-dom',()=> ({Link:'Link'}));

describe('FilmCard component', ()=>{
  it('FilmCard component shows correctly', () => {
    const tree = renderer.create(
      <FilmCard item={filmData}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})