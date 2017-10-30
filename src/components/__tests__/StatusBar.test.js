import * as React from 'react';
import {StatusBar} from '../StatusBar';
import * as renderer from 'react-test-renderer';

const ChildrenComponent = ()=> {
  return 'ChildrenComponent';
}


describe('StatusBar component', ()=>{
  it('StatusBar component shows correctly', () => {
    const tree = renderer.create(
      <StatusBar status={<ChildrenComponent/>} option={<ChildrenComponent/>}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})