import * as React from 'react';
import {NoItems} from '../NoItems';
import * as renderer from 'react-test-renderer';


describe('NoItems component', ()=>{
  it('NoItems component shows correctly', () => {
    const tree = renderer.create(
      <NoItems />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})