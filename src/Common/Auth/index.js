import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Auth extends Component {

    componentDidMount() {
        if (!this.props.token) {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <Fragment>
                {this.props.render(this.props)}
            </Fragment>
        )
    }
}

export default withRouter(Auth)