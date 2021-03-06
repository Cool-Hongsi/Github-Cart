import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './scss/Navbar.scss';

class Navbar extends Component{
    render(){

        const { total } = this.props;

        return(
            <div className="navbar" data-test="navbarComponent">
                <nav>
                    <input type="checkbox" id="nav" className="hidden" />
                    <label htmlFor="nav" className="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                    </label>

                    <div className="logo">
                        <Link to="/">Github Cart</Link>
                    </div>

                    <div className="nav-wrapper" data-test="navwrapper">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cart">Cart ({total})</Link></li>
                            
                            {/* 'a' link reload the page (In other words, the value of state will be initialized) 
                            Alternatively, 'Link' shows the page without reloading. So, it is possible to retain the value of state */}

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total : state.cart.total
    }
};

export default connect(
    mapStateToProps
)(Navbar);

// Validate props
Navbar.propTypes = {
    total : PropTypes.number
};