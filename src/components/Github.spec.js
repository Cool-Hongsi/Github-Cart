// import React from 'react';
// import { shallow } from 'enzyme';
import Github from './Github';

import { checkProps } from '../Utils/index';

describe('Github component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw an error or warning', () => {
            const expectedProps = {
                pending : false,
                error : false,
                repeated : false,
                data : [
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

            const propsErr = checkProps(Github, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

});
