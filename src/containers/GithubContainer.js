import React, { Component } from 'react';
import { connect } from 'react-redux';
import Github from '../components/Github';
import { getPost, addCart } from '../store/modules/cart';

class GithubContainer extends Component{

    // componentDidMount = () => {
    //     const { number, getPost } = this.props;
    //     getPost(number);
    // };

    // componentWillReceiveProps = (nextProps) => {
    //     const { number, getPost } = this.props;
    //     if(number !== nextProps.number){
    //         getPost(nextProps.number);
    //     }
    // };

    onSelectedID = (githubID) => {
        const { getPost } = this.props;
        getPost(githubID);
    };

    onSelectedCart = (addGithub) => {
        const { addCart } = this.props;
        addCart(addGithub);
    };

    render(){

        const { pending, error, repeated, data } = this.props;

        return(
            <Github
                pending={pending}
                error={error}
                repeated={repeated}
                data={data}
                onSelectedID={this.onSelectedID}
                onSelectedCart={this.onSelectedCart}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pending : state.cart.pending,
        error : state.cart.error,
        repeated : state.cart.repeated,
        data : state.cart.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost : (githubID) => { dispatch(getPost(githubID)) },
        addCart : (addGithub) => { dispatch(addCart(addGithub)) }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubContainer);