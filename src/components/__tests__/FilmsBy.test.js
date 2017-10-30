import * as React from 'react';
import {FilmsBy} from '../FilmsBy';
import * as renderer from 'react-test-renderer';


describe('FilmsBy component', ()=>{
  it('FilmsBy component shows correctly', () => {
    const tree = renderer.create(
      <FilmsBy field="person"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})