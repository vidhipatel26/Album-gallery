import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import PhotoCard from './PhotoCard';
import Pagination from '../CommonComponents/Pagination';
import initializeStore from '../../Redux/Store';
import ListPhoto from './ListPhoto';

configure({adapter: new Adapter()});

const store = initializeStore();
let renderedComponent;

beforeEach(() => {
    renderedComponent = (props = {}) => {
        shallow(<Provider store={store}><ListPhoto /></Provider>);

    }
});

describe('<Add /> rendering', () => {
    it('<PhotoCard> should render undefined', () => {
        expect(renderedComponent(PhotoCard)).toEqual(undefined);
    });
it('<Pagination> should render undefined', () => {
        expect(renderedComponent(Pagination)).toEqual(undefined);
    });
});