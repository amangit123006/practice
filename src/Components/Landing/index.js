import React, { Component , Fragment } from 'react'
import Pagination from "react-js-pagination";
import {getUsersData} from './../../Api'
import './landing.css'
import { Link } from 'react-router-dom';


export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users : [],
            activePage : 1,
            count:0,
            itemsPerPage : 0
        }
        this.getUserDataByPage = this.getUserDataByPage.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)

        
    }

    componentDidMount() {
        this.getUserDataByPage(this.state.activePage , true)
    }

    getUserDataByPage(page , initialCall = false) {
        getUsersData(page).then((response) => {
            this.setState({
                users : response.data.data
            })

            if(initialCall) {
                this.setState({
                    count : response.data.total,
                    itemsPerPage : response.data.per_page
                })
            }

        })
    }

    handlePageChange(pageNumber) {
        
        this.setState({activePage: pageNumber});

        this.getUserDataByPage(pageNumber)
      }


    render() {
        return (
            <div className="usersContainer">

                <h1> Users</h1>

                <div className="detailsTable">
                    <div className="detailsTableHeader"> 
                        <div className="idHeader">
                        ID
                        </div >
                        <div className="nameHeader">
                        Name
                        </div>
                        <div className="emailHeader">
                        Email
                        </div>
                    </div>

                    {
                        this.state.users.map((item) => (
                            <div key={item.id} className="detailsTableContent"> 
                            <div className="id">
                            {item.id}
                            </div>
                            <div className="name">
                                <Link to ={`users/${item.id}`}>
                                {item.first_name + " " + item.last_name}

                                </Link>
                            </div>
                            <div className="email">
                            {item.email}
                            </div>
                        </div>
                        ))
                    }
                  
                </div>

                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsPerPage}
                    totalItemsCount={this.state.count}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                 />
                
                
            </div>
        )
    }
}
