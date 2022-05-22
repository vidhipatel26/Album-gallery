import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Album from './Album';
import Pagination from '../CommonComponents/Pagination';
import initializeStore from '../../Redux/Store';
import ListAlbum from './ListAlbum';

configure({adapter: new Adapter()});

const store = initializeStore();
let renderedComponent;

beforeEach(() => {
    renderedComponent = (props = {}) => {
        shallow(<Provider store={store}><ListAlbum /></Provider>);

    }
});

describe('<ListAlbum /> rendering', () => {
    it('<Album> should render undefined', () => {
        expect(renderedComponent(Album)).toEqual(undefined);
    });
    it('<Pagination> should render undefined', () => {
        expect(renderedComponent(Pagination)).toEqual(undefined);
    });
});