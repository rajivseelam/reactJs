import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { fetchUsers, clearUsersList } from '../../actions/users/userActions'
import '../../stylesheets/users/users'

@connect((store) => {
    return {
      usersCount: store.userReducer.usersCount,
      userList: store.userReducer.userList
    }
})
export default class UserPage extends Component {
    componentWillMount(){
      this.props.dispatch(clearUsersList());
      this.props.dispatch(fetchUsers());
    }

    render(){
       var mappedUser = [];
       if(this.props.userList.length > 0){
          mappedUser = this.props.userList.map(data => <li key={data.id}> { data.id } </li>)
       }
       return(
          <div className='container-users'>
                <h1> Welcome To UserPage  - </h1>
                <ul>{mappedUser}</ul>
          </div>
      )
    }
}
