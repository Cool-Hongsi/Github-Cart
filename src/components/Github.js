import React, { Component } from 'react';
import './scss/Github.scss';
import PropTypes from 'prop-types';

export default class Github extends Component{

    constructor(props){
        super(props);

        this.state = {
            id : ''
        }

        this.setData = this.setData.bind(this);
        this.keyPress = this.keyPress.bind(this);
    };

    setData = (e) => {
        this.setState({
            id : e.target.value
        })
    };

    keyPress = (e) => {
        if(e.key === 'Enter'){
            this.props.onSelectedID(this.state.id);
        }
    };

    render(){

        const { pending, error, repeated, data, onSelectedID, onSelectedCart } = this.props;

        return(
            <div className="github">
                <h1 className="github-title">Search Github ID</h1>
                <input className="github-input" type="text" placeholder="Github ID" onChange={this.setData} onKeyPress={this.keyPress} />
                <button className="github-button" onClick={() => onSelectedID(this.state.id)}>SEND</button>
                <br/><br/><br/>
                {pending ? <h3 className="github-loading">Loading...</h3> : null}
                {repeated ? <h3 className="github-repeated">You have already added.</h3> : null}
                {error ? <h3 className="github-error">Error... (Please put correct ID)</h3> : (
                    <div className="github-data">
                        <table className="github-table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>Login</th>
                                    <th>ID</th>
                                    <th>Repo</th>
                                    <th>Image</th>
                                    <th>Link</th>
                                    <th>Cart</th>
                                </tr>
                                {data.map((el, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{el.login}</td>
                                            <td>{el.id}</td>
                                            <td>{el.public_repos}</td>
                                            <td><img src={el.avatar_url} alt="" style={{width:"25px", height: "25px"}} /></td>
                                            <td><a href={el.html_url} target="_blank" rel="noopener noreferrer">Click</a></td>
                                            <td><button onClick={() => onSelectedCart(el)}>Cart</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        )
    }
}

// Validate props
Github.propTypes = {
    pending : PropTypes.bool,
    error : PropTypes.bool,
    repeated : PropTypes.bool,
    data : PropTypes.arrayOf(PropTypes.shape({
        login : PropTypes.string,
        id : PropTypes.number,
        avatar_url : PropTypes.string,
        public_repos : PropTypes.string,
        html_url : PropTypes.string,
        quantity : PropTypes.number
    }))
};