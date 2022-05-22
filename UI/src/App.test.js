import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});

describe('>>>App --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper

  beforeEach(()=>{
      wrapper = shallow(<App />);
  })

  it('+++ render the App component', () => {
     expect(wrapper.length).toEqual(1)
  });
  
});