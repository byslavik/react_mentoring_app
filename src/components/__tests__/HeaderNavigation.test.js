import * as React from 'react';
import {HeaderNavigation} from '../HeaderNavigation';
import * as renderer from 'react-test-renderer';

jest.mock('react-router-dom',()=> ({Link:'Link'}));

describe('HeaderNavigation component', ()=>{
  it('HeaderNavigation component shows correctly', () => {
    const tree = renderer.create(
      <HeaderNavigation />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})