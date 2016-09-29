import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../stylesheets/home/home'

export default class HomePage extends Component {
    render(){
        return(
            <div className='container-home'>
                  <button value="Test Button" className='btn btn-success'> Submit </button>
                  <h1> Welcome To HomePage </h1>
            </div>
        )
    }
}
