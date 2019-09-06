// import React from 'react';
// import { shallow } from 'enzyme';
import Navbar from './Navbar';

import { checkProps } from '../Utils/index';

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

});