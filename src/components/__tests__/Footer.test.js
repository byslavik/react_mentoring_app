import * as React from 'react';
import {Footer} from '../Footer';
import * as renderer from 'react-test-renderer';


describe('Footer component', ()=>{
  it('Footer component shows correctly', () => {
    const tree = renderer.create(
      <Footer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})