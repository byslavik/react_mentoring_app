import * as React from 'react';
import {PersonCard} from '../PersonCard';
import * as renderer from 'react-test-renderer';
import {filmData} from './testData'

jest.mock('react-router-dom',()=> ({Link:'Link'}));

describe('PersonCard component', ()=>{
  it('PersonCard component shows correctly', () => {
    const tree = renderer.create(
      <PersonCard item={filmData}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})