import React, {Component} from 'react';

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

                </div>

            </div>
        );
    }
}

export default UserDetails;