import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { fetchUsers } from '../../actions/userActions'
@connect((store) => {
    return {
      user: store.user.user
    }
})
export default class UserPage extends Component {
    componentWillMount(){
      this.props.dispatch(fetchUsers());
    }

    render(){
       console.log(this.props)
       var mappedUser = [];
       if(this.props.user.length > 0){
          mappedUser = this.props.user.map(data => <li key={data.id}> { data.id } </li>)
       }
       return(
          <div className='app'>
                <h1> Welcome To UserPage  - </h1>
                <ul>{mappedUser}</ul>
          </div>
      )
    }
}
