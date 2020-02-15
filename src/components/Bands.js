import React, { Component } from 'react';
import Band from './Band'
import { connect } from 'react-redux'

class Bands extends Component {
    
    render() {
      return(
        <div>
            <ul>
            {this.props.bands.map(band => 
                    <Band name={band.name} id={band.id} delete={this.props.deleteBand}/>
                )}
            </ul>
        </div>
      );
    }
  };

const mapDispatchToProps = dispatch => ({
  deleteBand: id => dispatch(
      { type: 'DELETE_BAND', id})
})

export default connect(null, mapDispatchToProps)(Bands);