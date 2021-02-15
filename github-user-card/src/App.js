import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

import Search from "./components/Search";

class App extends React.Component {
    constructor() {
        console.log('constructor invoked');
        super();
        this.state = {
            currentUser : "rodolfojaspe",
            followers: []
        }
    }

    componentDidMount () {
        this.searchUser(this.state.currentUser)
    }

    searchUser = login => {
        axios.get(`https://api.github.com/users/${login}`)
        .then(res=> {
            console.log(res)
            this.setState({
                ...this.state, currentUser: res.data
            })
        })
        .catch(err=> console.log("err", err));
        axios.get(`https://api.github.com/users/${login}/followers`)
        .then(res => {
            console.log(res)
            this.setState({
                ...this.state, followers: res.data
            })
        })
        .catch(err=> console.log('err', err))
    }


    render() {
        console.log('render invoked');
        return (
            <div>        
                <Search searchUser={this.searchUser} />
                <UserCard userCard={this.state.currentUser}/>
                {this.state.followers.map(follower => (
                    <UserCard userCard={follower} key={follower.id}/>
                ))}
            </div>
        )
    }
}

export default App;
