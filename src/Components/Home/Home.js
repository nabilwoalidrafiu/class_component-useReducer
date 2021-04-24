import React, { Component } from 'react';
import User from '../User/User';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users:[],
            cart: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this)
        
    }
    
    handleAddToCart(user){
        const newCart = [...this.state.cart, user]
        this.setState({cart: newCart})
    }

    componentDidMount(){
        fetch('https://agile-anchorage-30388.herokuapp.com/checkout')
        .then(res => res.json())
        .then(data =>this.setState({users:data}))
    }

    render() {
        return (
            <div>
                <h1>Class component</h1>
                <h3>total: {this.state.users.length}</h3>
                <h3>Added: {this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <User handleAddToCart={this.handleAddToCart} user={user}></User>)
                }
            </div>
        );
    }
}

export default Home;