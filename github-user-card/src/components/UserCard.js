import React from 'react';

class UserCard extends React.Component {
    render () {
        const {userCard} = this.props;
        return (
            <div className="card">
                <h2>User Card</h2>
                <img  src={userCard.avatar_url} alt="profile image"/>
                <div className="card-info">
                    <h3 className="name">{userCard.name}</h3>
                    <p className="username">{userCard.login}</p>
                    <p>Location: {userCard.location}</p>
                    <p>Profile: {userCard.html_url}</p>
                    <p>Followers: {userCard.followers}</p>
                    <p>Following: {userCard.following}</p>
                    <p>Bio: {userCard.bio}</p>
                </div>
          </div>
        )
    }
}

export default UserCard