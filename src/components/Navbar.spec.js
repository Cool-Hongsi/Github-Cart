import React from 'react';
// import { shallow } from 'enzyme';
import Navbar from './Navbar';

import { checkProps } from '../Utils/index';

// import { store } from '../index';
// import { Provider } from 'react-redux';

describe('Navbar component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw an error or warning', () => {
            const expectedProps = {
                total: 100
            };

            const propsErr = checkProps(Navbar, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

    // describe('Renders', () => {
    //     let wrapper;
    //     beforeEach(() => {
    //         const props = {
    //             total : 123
    //         };

    //         wrapper = shallow(<Provider store={store}><Navbar {...props} /></Provider>).dive();
    //     });

    //     it('Should Render Navbar Component ', () => {
    //         const navbar = findByTestAttr(wrapper, 'navbarComponent');
    //         expect(navbar.length).toBe(1);
    //     });
    // });

});