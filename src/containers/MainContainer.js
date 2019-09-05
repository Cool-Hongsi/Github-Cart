import React, { Component } from 'react';
import Navbar from '../components/Navbar';

export default class MainContainer extends Component{
    render(){
        return(
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}