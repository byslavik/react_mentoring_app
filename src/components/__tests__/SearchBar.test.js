import * as React from 'react';
import {SearchBar} from '../SearchBar';
import * as renderer from 'react-test-renderer';
import {match} from './testData'

jest.mock('../Button',()=> ({Button:'Button'}));

describe('SearchBar component', ()=>{
  it('SearchBar component shows correctly with "person" method', () => {
    const tree = renderer.create(
      <SearchBar method="person" match={match}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SearchBar component shows correctly with "movie" method', () => {
    const tree = renderer.create(
      <SearchBar method="movie" match={match}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})