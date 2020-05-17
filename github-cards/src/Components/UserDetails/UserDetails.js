import React, {Component} from 'react';
import {connect} from "react-redux";

import {AddUser, RemoveUser} from "../../redux/actions";

class UserDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: this.props.match.params.id,
            data: {}
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }


    async fetchData(){
        const {username} = this.state;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        const data = await resp.json();
        this.setState({
            data
        });
    }

    render() {
        const {username, data} = this.state;
        const users = this.props.friends;
        const isFriend = (users.filter(user => user.name === username).length > 0);
        const friendBtn = (friends, userData) => {
          if(friends){
              return (
                <button className="remove-friend-btn" onClick={() => this.props.removeFriend(userData.name)}>
                    Remove Friend
                </button>
              );
          }
          return (
            <button className="add-friend-btn" onClick={() => this.props.addFriend(userData)}>
                Add Friend
            </button>
          );
        };
        return (
            <div className="card-container">
                <img src={data.avatar_url}
                     alt="avatar"
                     height={200}
                     width={200}
                />

                <h1>{username}</h1>
                <div className="card-details">
                    <div className="card-data">
                        <span className="card-property">
                            Name
                        </span>
                        <span className="card-value">
                            {data.name}
                        </span>
                    </div>

                    <div className="card-data">
                        <span className="card-property">
                            Public Repositories
                        </span>
                        <span className="card-value">
                            {data.public_repos}
                        </span>
                    </div>

                    <div className="card-data">
                        <span className="card-property">
                            Followers
                        </span>
                        <span className="card-value">
                            {data.followers}
                        </span>
                    </div>

                    <div className="card-data">
                        <span className="card-property">
                            Following
                        </span>
                        <span className="card-value">
                            {data.following}
                        </span>
                    </div>
                    <div className="card-btn">
                        <button onClick={() => console.log(data.html_url)} className="github-btn">
                            Show Profile
                        </button>
                        {friendBtn(isFriend, {name: username, avatar: data.avatar_url})}
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.users
    };
};

const mapDispatchToProps = {
    addFriend: AddUser,
    removeFriend: RemoveUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);