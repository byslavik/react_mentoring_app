import * as React from 'react';
import {FilmFilter} from '../FilmFilter';
import * as renderer from 'react-test-renderer';

describe('FilmFilter component', ()=>{
  it('FilmFilter component shows correctly with "vote_count" option', () => {
    const tree = renderer.create(
      <FilmFilter sort="vote_count"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('FilmFilter component shows correctly with "popularity" option', () => {
    const tree = renderer.create(
      <FilmFilter sort="popularity"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});