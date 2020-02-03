import React, { Component } from 'react'
import { getUserDataById } from './../../Api'
import './userDetails.css'

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userDetails: {}
        }
    }

    componentDidMount() {
        // this.props.match.params.id
        getUserDataById(this.props.match.params.id).then(response => {
            this.setState({
                userDetails: response.data.data
            })
        })
    }
    render() {
        return (
            <div className="UserDetailsContainer">
                <div className="userDetails">
                    <img className="userImage" src={this.state.userDetails.avatar} />
                    <div>
                        Name : {this.state.userDetails.first_name + " " + this.state.userDetails.last_name}
                    </div>
                    <div>
                        Email : {this.state.userDetails.email}
                    </div>

                </div>

            </div>
        )
    }
}


export default User