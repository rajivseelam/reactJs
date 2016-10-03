import React, { Component } from 'react'
import { Link } from 'react-router'
import '../../stylesheets/common/main'

export default class DetailedPageLayout extends Component {
    render(){
        return(
            <div className="row"> {this.props.children} </div>
        )
    }
}
