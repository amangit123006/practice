import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login'
import LandingPage from './Components/Landing'
import UserDetail from './Components/User'
import Auth from './Common/Auth'




import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: null
    }
  }


  login(data) {
    this.setState({ token: data })

  }


  render() {
    return (

      //       <div className="App">


      // {/* <Login login = {this.login.bind(this)}></Login> */}
      // <LandingPage ></LandingPage>
      // {/* <userDetail></userDetail> */}


      //     </div>


      <BrowserRouter>

        <div className="App">

          {/* <Switch> */}
          {/* <Route exact path='/' render = {(props) => <Login {...props} login = {this.login.bind(this)}></Login>}> </Route> */}

          <Route path='/login' >
            <Login login={this.login.bind(this)} />
          </Route>


          <Route exact path='/' >
            <Auth token={this.state.token} render={(props) => <LandingPage {...props} ></LandingPage>} />
          </Route>
          <Route path='/users/:id' >
            <Auth token={this.state.token} render={(props) => <UserDetail {...props} ></UserDetail>} />
          </Route>
          {/* </Switch> */}

        </div>
      </BrowserRouter>

    )
  }
}



export default App;