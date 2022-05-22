import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import NotFound from '../Components/CommonComponents/404';
import Routing from './Routing';
import Album from '../Components/Albums/ListAlbum';
import Photos from '../Components/Photos/ListPhoto';

configure({adapter: new Adapter()});

test('invalid path should redirect to 404', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <Routing/>
    </MemoryRouter>
  );
  expect(wrapper.find(Dashboard)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);

});

test('valid path should not redirect to 404', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Routing/>
    </MemoryRouter>
  );
  expect(wrapper.find(Dashboard)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);

});

test('valid path should not redirect to 404', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/Album' ]}>
      <Routing/>
    </MemoryRouter>
  );
  expect(wrapper.find(Album)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);

});

test('valid path should not redirect to 404', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={[ '/Photos' ]}>
      <Routing/>
    </MemoryRouter>
  );
  expect(wrapper.find(Photos)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(0);

});