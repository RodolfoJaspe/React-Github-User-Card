import React from 'react';

class UserCard extends React.Component {
    render () {
        const {userCard} = this.props;
        return (
            <div className="card">
                <img  src={userCard.avatar_url} alt="profile image"/>
                <div className="card-info">
                    <h3 className="name">{userCard.name}</h3>
                    <p className="username"><b>Username:</b> {userCard.login}</p>
                    <p><b>Location:</b> {userCard.location}</p>
                    <p><b>Profile:</b> {userCard.html_url}</p>
                    <p><b>Followers: </b>{userCard.followers}</p>
                    <p><b>Following: </b>{userCard.following}</p>
                    <p><b>Bio: </b>{userCard.bio}</p>
                </div>
          </div>
        )
    }
}

export default UserCard