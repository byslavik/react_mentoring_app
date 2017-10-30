import * as React from 'react';
import {Header} from '../Header';
import * as renderer from 'react-test-renderer';

const ChildrenComponent = ()=> {
  return 'ChildrenComponent';
}

describe('Header component', ()=>{
  it('Header component shows correctly', () => {
    const tree = renderer.create(
      <Header>
        <ChildrenComponent/>
      </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})