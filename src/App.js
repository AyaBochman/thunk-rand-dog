import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { getDog } from './redux/actions';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Get Random Dog",
     
    }


  }


  componentWillMount(){
    this.props.actions.getDog()
  }


  handleClick = () => {
    this.props.actions.getDog()
  }



  render() {
    console.log("render")
    return (

      <div className="App">
        <h4>Image of Dog</h4>
<img src={this.props.dog} alt="randDog"/>
<br/>
<br/>
        <button className={'btn btn-primary'} onClick={this.handleClick}>Get Random Dog</button>

      </div>
    );
  }
}


App.propTypes = {
  getDog: PropTypes.func.isRequired,
  dog:PropTypes.string.isRequired,
  newDog:PropTypes.string.isRequired
};

const mapStateToProps = state => ({
dog: state.dog,
})


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getDog: getDog,
    
    },
    dispatch
  )
  
  })

export default connect(mapStateToProps,mapDispatchToProps)(App);

