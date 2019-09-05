import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { increment, decrement, remove } from '../store/modules/cart';

class CartContainer extends Component{

    onSelectedIncrement = (data) => {
        const { increment } = this.props;
        increment(data);
    };

    onSelectedDecrement = (data) => {
        const { decrement } = this.props;
        decrement(data);
    };

    onSelectedRemove = (data) => {
        const { remove } = this.props;
        remove(data);
    };

    render(){

        const { total, data } = this.props;

        /* As long as the quantity value of state data array is 0, can NOT show it to the page */
        let newData = data.filter((el) => {
            return el.quantity > 0;
        });

        return(
            <Cart
                total={total}
                newData={newData}
                onSelectedIncrement={this.onSelectedIncrement}
                onSelectedDecrement={this.onSelectedDecrement}
                onSelectedRemove={this.onSelectedRemove}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        total : state.cart.total,
        data : state.cart.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment : (data) => { dispatch(increment(data)) },
        decrement : (data) => { dispatch(decrement(data)) },
        remove : (data) => { dispatch(remove(data)) }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer);