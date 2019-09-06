import React from 'react';
// import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { checkProps } from '../Utils/index';
// import { checkProps, findByTestAttr } from '../Utils/index';

// setUp function usually stay in test file becuase of initial setting up function (shallow)
// const setUp = (props={}) => {
//     const component = shallow(<Navbar {...props} />).childAt(0).dive(); // shallow function acts as rendering <Header /> Component
//     // console.log(component.debug()); // check what shallow function is doing
//     return component;
//     in order to use shallow method from enzyme,
//     should replace the version of 'react' , 'react-redux' from package.json with previous version.
// };

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

    // describe('Have props', () => {
    //     let wrapper;
    //     beforeEach(() => {
    //         const props = {
    //             title : 123
    //         };

    //         wrapper = setUp(props);
    //     });

    //     it('Should render without errors', () => {
    //         const component = findByTestAttr(wrapper, 'navbarComponent');
    //         expect(component.length).toBe(1);
    //     });

    //     it('Should render a nav-wrapper', () => {
    //         const navwrapper = findByTestAttr(wrapper, 'navwrapper');
    //         expect(navwrapper.length).toBe(1);
    //     });
    // });
});