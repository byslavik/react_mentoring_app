import * as React from 'react';
import {FilmDescription} from '../FilmDescription';
import * as renderer from 'react-test-renderer';
import {filmData, match} from './testData'


describe('FilmDescription component', ()=>{
  it('FilmDescription component shows correctly', () => {
    const tree = renderer.create(
      <FilmDescription currentFilm={filmData} match={match} getFilmsByQuery={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})