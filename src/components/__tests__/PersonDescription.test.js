import * as React from 'react';
import {PersonDescription} from '../PersonDescription';
import * as renderer from 'react-test-renderer';
import {filmData, match} from './testData'


describe('PersonDescription component', ()=>{
  it('PersonDescription component shows correctly', () => {
    const tree = renderer.create(
      <PersonDescription currentFilm={filmData} match={match} getFilmsByQuery={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})