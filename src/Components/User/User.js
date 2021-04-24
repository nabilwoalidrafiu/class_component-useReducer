import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div style={{border: '2px solid black' , margin: '5px'}}>
                <h4>{this.props.user.name}</h4>
                <h4>{this.props.user.price}</h4>
                <button onClick={() => this.props.handleAddToCart(this.props.user)}>Add me</button>
            </div>
        );
    }
}

export default User;