import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions/index.js';

class City extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.selectCity(this.props)
  }

  render () {
    if (!this.props.selectedCity) {
      return (
        <div className="list-group-item" onClick={this.handleClick}>
          <h5>{this.props.name}</h5>
        </div>
      )
    } else {
      const url = `url('https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}'`
      return (
        <div className="active-city" style={{backgroundImage: url}}>
          <h5>{this.props.selectedCity.name}</h5>
          <p>{this.props.selectedCity.address}</p>
          <a>{this.props.selectedCity.slug}</a>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
