import React, {Component} from 'react';
import {connect} from "react-redux";

import {AddUser, RemoveUser} from "../../redux/actions";

class UserDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: this.props.match.params.id,
            data: {},
            isFriend: false
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        const friendFilter = this.props.friends.filter(name => (name === this.state.username));
        if(friendFilter.length === 0){
            this.setState({isFriend: false});
        }
        else{
            this.setState({isFriend: true});
        }
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
        const {username, data, isFriend} = this.state;

        const friendBtn = (friends) => {
          if(friends){
              return (
                <button>
                    Remove Friend
                </button>
              );
          }
          return (
            <button>
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

                    {friendBtn(isFriend)}

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

const mapDispatchToProps = () => {
    return {
        addFriend: AddUser,
        removeFriend: RemoveUser
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);