import React from 'react';
import './followerCard.css';

class FollowerCard extends React.Component {
    render () {
        const {userCard} = this.props;
        return (
            <div className="card">
                <img  src={userCard.avatar_url} alt="profile image"/>
                <p className="username"><b>Username:</b> {userCard.login}</p>
          </div>
        )
    }
}

export default FollowerCard