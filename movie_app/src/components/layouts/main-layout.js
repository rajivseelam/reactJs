import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../header/header'
import '../../stylesheets/common/main'

export default class MainLayout extends Component {
    render(){
        return(
            <div className='main-container'>
                <Header/>
                <div className="main-container">
                    <div className="col-lg-12">
                        <h1>Logo Nav by Start Bootstrap</h1>
                        <p>Note: You may need to adjust some CSS based on the size of your logo. The default logo size is  pixels.</p>
                    </div>
                </div>
            </div>
        )
    }
}
