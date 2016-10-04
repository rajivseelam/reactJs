import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { fetchCelebsDetails, clearAllCelebsDetails } from '../../actions/celebs/celebs-detailed-actions'

@connect((store) => {
    return{
      celebDetails: store.celebDetailsReducer.celebDetails,
      celebDetailsfetched: store.celebDetailsReducer.celebDetailsfetched
    }
})
export default class CelebsDetailedPage extends Component{
    componentWillMount(){
        let userId = this.props.params.id
        this.props.dispatch(clearAllCelebsDetails())
        this.props.dispatch(fetchCelebsDetails(userId))
    }

    render(){
        var celebDetailsElement = null;
        if(this.props.celebDetails){
            let celeb = this.props.celebDetails;
            celebDetailsElement = <div className="row">
                <div className="col-md-4">
                    <img src={(celeb.profile_path ? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + celeb.profile_path: (celeb.backdrop_path ? "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + celeb.backdrop_path : require('../../images/no-poster.png')) )} width="100%" height="100%" className="img-responsive" alt="Generic placeholder thumbnail" />
                </div>
                <div className="col-md-8">
                    <div className='container-fluid'>
                          <h1> <b> { celeb.name? celeb.name : '-'} </b> </h1>
                          <hr/>
                          <h3>Personal Info</h3>
                          <div className="container-fluid">
                              <div className="col-md-3 crew-tile">
                                <h4> <b>Gender</b></h4>
                                <h5>{ celeb.gender == 1 ? 'Female' : 'Male' }</h5>
                              </div>
                              <div className="col-md-3 crew-tile">
                                <h4> <b>Birthday</b></h4>
                                <h5>{ celeb.birthday ? celeb.birthday : '-' }</h5>
                              </div>
                              <div className="col-md-3 crew-tile">
                                <h4> <b>Place of Birth</b></h4>
                                <h5>{ celeb.place_of_birth ? celeb.place_of_birth : '-' }</h5>
                              </div>

                              <div className="col-md-3 crew-tile">
                                <h4> <b>Adult Actor</b></h4>
                                <h5>{ celeb.adult ? 'True' : 'False' }</h5>
                              </div>
                           </div>
                          <hr/>
                          <h3>Biography</h3>
                          <div className="container-fluid"> <p>{ celeb.biography ? celeb.biography : '-'}</p> </div>
                     </div>
                </div>
            </div>
        }

        return(
            <div> {celebDetailsElement} </div>
        )
    }
}
