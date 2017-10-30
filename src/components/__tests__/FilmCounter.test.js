import * as React from 'react';
import {FilmCounter} from '../FilmCounter';
import * as renderer from 'react-test-renderer';

describe('FilmCounter component', ()=>{
  it('FilmCounter component shows correctly with 1 movie', () => {
    const tree = renderer.create(
      <FilmCounter count={1}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('FilmCounter component shows correctly with many movies', () => {
    const tree = renderer.create(
      <FilmCounter count={2}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});