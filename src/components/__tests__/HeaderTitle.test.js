import * as React from 'react';
import {HeaderTitle} from '../HeaderTitle';
import * as renderer from 'react-test-renderer';


describe('HeaderTitle component', ()=>{
  it('HeaderTitle component shows correctly', () => {
    const tree = renderer.create(
      <HeaderTitle />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})