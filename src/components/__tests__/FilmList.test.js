import * as React from 'react';
import {FilmList} from '../FilmList';
import * as renderer from 'react-test-renderer';
import {filmList} from './testData'

jest.mock('react-router-dom',()=> ({Link:'Link'}));
jest.mock('../FilmCard',()=> ({FilmCard: 'FilmCard'}));
jest.mock('../PersonCard',()=> ({PersonCard: 'PersonCard'}));
jest.mock('../NoItems',()=> ({NoItems: 'NoItems'}));

describe('FilmList component', ()=>{
  it('FilmList component shows correctly with FilmData', () => {
    const tree = renderer.create(
      <FilmList films={filmList} method="movie"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('FilmList component shows correctly with PersonData', () => {
    const tree = renderer.create(
      <FilmList films={filmList} method="person"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('FilmList component shows correctly without data', () => {
    const tree = renderer.create(
      <FilmList films={[]} method="person"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});