import React from 'react';

class Search extends React.Component {
    constructor () {
        super();
        this.state = {
            login : ""
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state, login: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.login);
        this.setState({
            ...this.state, login: ""
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.login} placeholder="enter github username"/>
                    <button>Search User</button>
                </form>
            </div>
        )
    }
}

export default Search