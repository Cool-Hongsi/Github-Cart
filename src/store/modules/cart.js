import axios from 'axios';
import { GET_POST_PEDNING, GET_POST_SUCCESS, GET_POST_FAILURE, ADD_CART, INCREMENT, DECREMENT, REMOVE } from './action';

/* Action Functions */
export const getPostAPI = (githubID) => {
    return axios.get(`https://api.github.com/users/${githubID}`);
};

export const getPost = (githubID) => (dispatch) => {
    dispatch( { type : GET_POST_PEDNING } );

    return getPostAPI(githubID).then((res) => {
        dispatch( { type : GET_POST_SUCCESS, payload : res } );
    }).catch((err) => {
        dispatch( { type : GET_POST_FAILURE, payload : err } );
    })
};

export const addCart = (addGithub) => (dispatch) => {
    dispatch( { type : ADD_CART, payload : addGithub } );
};

export const increment = (data) => {
    return { type : INCREMENT, payload : data };
};

export const decrement = (data) => {
    return { type : DECREMENT, payload : data };
};

export const remove = (data) => {
    return { type : REMOVE, payload : data };
};

const initialState = {
    pending : false,
    error : false,
    repeated : false,
    data : [
        {
            login : 'Cool-Hongsi',
            id : 39789641,
            avatar_url : 'https://avatars3.githubusercontent.com/u/39789641?v=4',
            public_repos : '31',
            html_url : 'https://github.com/Cool-Hongsi',
            quantity : 0
        }
    ],
    total : 0
    // cartData : [
    //     {
    //         login : '',
    //         id : '',
    //         avatar_url : '',
    //         public_repos : '',
    //         quantity : 0
    //     }
    // ]
};

/* Cart Reducer */
export default function cart(state = initialState, action) {

    switch(action.type){

        case GET_POST_PEDNING:
            return { ...state, pending : true, error : false, repeated : true };

        case GET_POST_SUCCESS:
            let repeatedFlag = false; // To check whether added data is already exist or not
            // If I use the 'map' method, it will create array
            for(let i=0; i<state.data.length; i++){
                if(state.data[i].id === action.payload.data.id){
                    repeatedFlag = true;
                    break; // Once it finds the repeated value, then stop for looping
                }
                else{
                    repeatedFlag = false;
                }
            }
            if(repeatedFlag === true){
                return { ...state, pending : false, error : false, repeated : true };
            }
            else{
                return { ...state, pending : false, error : false, repeated : false, data : state.data.concat({
                    login : action.payload.data.login,
                    id : action.payload.data.id,
                    avatar_url : action.payload.data.avatar_url,
                    public_repos : action.payload.data.public_repos,
                    html_url : action.payload.data.html_url,
                    quantity : 0
                }) };
            }

        case GET_POST_FAILURE:
            return { ...state, pending : false, error : true, repeated : false };

        case ADD_CART:
            state.data.map((el) => {
                if(el.id === action.payload.id){
                    el.quantity++;
                }
                return { ...state, pending : false, error : false, repeated : false, total : state.total + 1 };
            });
            return { ...state, pending : false, error : false, repeated : false, total : state.total + 1 };

            // state.cartData.map((el) => {
            //     if(el.id === action.payload.id){
            //         el.quantity += 1;
            //         return { ...state, pending : false, error : false, total : state.total + 1 };
            //     }
            // });
            // return { ...state, pending : false, error : false, total : state.total + 1, cartData : state.cartData.concat({
            //     login : action.payload.login,
            //     id : action.payload.id,
            //     avatar_url : action.payload.avatar_url,
            //     public_repos : action.payload.public_repos,
            //     quantity : action.count + 1
            // })}

        case INCREMENT:
            state.data.map((el) => {
                if(el.id === action.payload.id){
                    el.quantity++;
                }
                return { ...state, pending : false, error : false, total : state.total + 1 };
            })
            return { ...state, pending : false, error : false, total : state.total + 1 };

        case DECREMENT:
            state.data.map((el) => {
                if(el.id === action.payload.id){
                    el.quantity--;
                }
                return { ...state, pending : false, error : false, total : state.total - 1 };
            })
            return { ...state, pending : false, error : false, total : state.total - 1 };

        case REMOVE:
            var elQuantity = 0;
            state.data.map((el) => {
                if(el.id === action.payload.id){
                    elQuantity = el.quantity;
                    el.quantity = 0;
                    // If I do below, the data in array will be deleted. Then it can not show in Mainpage.
                    // Alternatively, make the value of quantity as '0' in order to remain the data in Mainpage and not show in cart page
                    // let index = state.data.indexOf(el);
                    // state.data.splice(index, 1);                    
                }   
                return { ...state, pending : false, error : false, total : state.total - elQuantity };
            })
            return { ...state, pending : false, error : false, total : state.total - elQuantity };
            
        default:
            return state
    }
};