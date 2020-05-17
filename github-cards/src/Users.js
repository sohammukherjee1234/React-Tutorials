import React, {Component} from 'react';
import SmallCards from "./Components/SmallCards/SmallCards";

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            userDetails: []
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }

    async fetchData(){
        const resp = await fetch("https://api.github.com/orgs/github/public_members");
        const data = await resp.json();
        this.setState({userDetails: data});
    }

    render() {
        return (
           <div className="wrapper">
               {this.state.userDetails.map(user => <SmallCards name={user.login} avatar={user.avatar_url}/>)}
           </div>
        );
    }
}

export default Users;