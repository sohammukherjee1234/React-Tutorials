import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            usernames: []
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }

    async fetchData(){
        const resp = await fetch("https://api.github.com/orgs/github/public_members");
        const data = await resp.json();
        const usernames = data.map(userDetails => userDetails.login);
        this.setState({usernames: usernames});
    }

    render() {
        return (
           this.state.usernames.map(username => {
               return (
                   <Link to={`/users/${username}`}>
                       <h1>
                           {username}
                       </h1>
                   </Link>
               );
           })
        );
    }
}

export default Users;