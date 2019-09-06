import { GET_POST_PENDING, GET_POST_SUCCESS, GET_POST_FAILURE, ADD_CART, INCREMENT, DECREMENT, REMOVE } from './action';
import { initialState } from './cart';
import cart from './cart';
import axios from 'axios';

describe('Cart Reducer', () => {

    it('Should return default state', () => {
        const newState = cart(undefined, {});

        expect(newState).toEqual(initialState);
    });

    it('Should return new state if receiving GET_POST_PENDING', () => {
        const GET_POST_PENDING_VALUE = initialState;

        const newState = cart(undefined, {
            type : GET_POST_PENDING,
            payload : GET_POST_PENDING_VALUE
        });

        expect(newState).toEqual(GET_POST_PENDING_VALUE);
    });

    it('Should return new state if receiving GET_POST_SUCCESS', () => {
        const newState = initialState;

        axios.get(`https://api.github.com/users/Cool-Hongsi`).then((res) => {
            newState = cart(undefined, {
                type : GET_POST_SUCCESS,
                payload : res
            });
        });

        const GET_POST_SUCCESS_VALUE = initialState;
        GET_POST_SUCCESS_VALUE.data.concat(newState);

        expect(newState).toEqual(GET_POST_SUCCESS_VALUE);
    });

    it('Should return new state if receiving GET_POST_FAILURE', () => {
        const GET_POST_FAILURE_VALUE = initialState;
        GET_POST_FAILURE_VALUE.error = true;

        const newState = cart(undefined, {
            type : GET_POST_FAILURE,
            payload : GET_POST_FAILURE_VALUE
        });

        expect(newState).toEqual(GET_POST_FAILURE_VALUE);
    });

    it('Should return new state if receiving ADD_CART', () => {
        const ADD_CART_VALUE = initialState;
        ADD_CART_VALUE.error = false;

        const newState = cart(undefined, {
            type : ADD_CART,
            payload : ADD_CART_VALUE
        });

        ADD_CART_VALUE.total += 1;

        expect(newState).toEqual(ADD_CART_VALUE);
    });

    it('Should return new state if receiving INCREMENT', () => {
        const INCREMENT_VALUE = initialState;

        const newState = cart(undefined, {
            type : INCREMENT,
            payload : INCREMENT_VALUE
        });

        INCREMENT_VALUE.total += 1;

        expect(newState).toEqual(INCREMENT_VALUE);
    });

    it('Should return new state if receiving DECREMENT', () => {
        const DECREMENT_VALUE = initialState;

        const newState = cart(undefined, {
            type : DECREMENT,
            payload : DECREMENT_VALUE
        });

        DECREMENT_VALUE.total -= 1;

        expect(newState).toEqual(DECREMENT_VALUE);
    });

    it('Should return new state if receiving REMOVE', () => {
        const REMOVE_VALUE = initialState;

        const newState = cart(undefined, {
            type : REMOVE,
            payload : REMOVE_VALUE
        });

        expect(newState).toEqual(REMOVE_VALUE);
    });
});
