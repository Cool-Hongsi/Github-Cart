// import React from 'react';
// import { shallow } from 'enzyme';
import Cart from './Cart';

import { checkProps } from '../Utils/index';

describe('Cart component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw an error or warning', () => {
            const expectedProps = {
                total : 123,
                newData : [
                    {
                        login : "string",
                        id : 123,
                        avatar_url : "string",
                        public_repos : "string",
                        html_url : "string",
                        quantity : 123
                    }
                ]
            };

            const propsErr = checkProps(Cart, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

});
