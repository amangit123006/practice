import React, { Component } from 'react'
import  './login.css';
import {loginService} from './../../Api';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : "",
            error : false
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
            error : false
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        loginService({email : this.state.username , password : this.state.password})
        .then((response) => {
            this.props.login(response.data.token)
            this.props.history.push('/')
        })
        .catch((err) => {
            // console.log(err)
            this.setState({
                error : true
            })
        })


    }
    render() { 
        return (
            <section className="loginSection">
                <form className="loginContainer">
                        <div className="formRow">
                            <label htmlFor="username">User Name</label> 

                        </div>
                        <div className="formRow">
                        <input onChange={this.onChange} name = "username" id="username"></input>

                        </div>
                        <div className="formRow">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="formRow">
                            <input  onChange={this.onChange} name= "password" type="password" id="password"></input>
                        </div>
                        <span className="error formRow">
                            {this.state.error  ?  "There is some issue with login, Please try again": null}
                        </span>

                        <div className="submitContainer">
                            <button onClick={this.handleSubmit.bind(this)} type="submit" className="loginButton">
                                Login
                            </button>
                        </div>
                </form>
                
            </section>
        )
    }
}

export default  withRouter(Login)