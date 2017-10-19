import * as React from 'react';
import {Button} from '../Button.tsx';
import * as renderer from 'react-test-renderer';

describe('Button component', ()=>{
  it('Button component shows correctly', () => {
    const tree = renderer.create(
      <Button action={()=>{}} isActive={false} style="red">Button</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Button gets active class', () => {
    const tree = renderer.create(
      <Button action={()=>{}} isActive={true} style="red">Button</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});