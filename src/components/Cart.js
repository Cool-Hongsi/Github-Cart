import React from 'react';
import './scss/Cart.scss';

const Cart = ( { total, newData, onSelectedIncrement, onSelectedDecrement, onSelectedRemove } ) => {
    return(
        <div className="cart-page">
            <table className="cart-table">
                <caption>Total : {total}</caption>
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Login</th>
                        <th>ID</th>
                        <th>Repo</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>quantity</th>
                        <th>Inc</th>
                        <th>Dec</th>
                        <th>Remove</th>
                    </tr>
                    {newData.map((el, index) => {
                        return(
                            <tr key={index}>
                                <td>{el.login}</td>
                                <td>{el.id}</td>
                                <td>{el.public_repos}</td>
                                <td><img src={el.avatar_url} alt="" style={{width:"25px", height: "25px"}} /></td>
                                <td><a href={el.html_url} target="_blank" rel="noopener noreferrer">Click</a></td>
                                <td>{el.quantity}</td>
                                <td><button onClick={() => onSelectedIncrement(el)}>+</button></td>
                                <td><button onClick={() => onSelectedDecrement(el)}>-</button></td>
                                <td><button onClick={() => onSelectedRemove(el)}>X</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Cart;