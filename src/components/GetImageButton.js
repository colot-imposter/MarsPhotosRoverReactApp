import React, { Component } from 'react';
import '../styles/App.css';

export default class GetImageButton extends Component {


  render() {
    return (

      <button type="submit" onClick={this.props.fetchRoverImage} style={{textAlign:"right" }}>Submit</button>
    );
  }
}
// onClick tells it what to do when it clicks, we are calling the method. in this case use props because it is being passed as a property
