import React, {Component} from 'react';

var noMatchStyle = {
  display:'block',
  width: '473px',
  height: '480px',
  textAlign:'center',
  margin:'0 auto',
  border: '3px solid #333',
  fontFamily: 'arial',
  fontSize: '16px',
}

export default class NoMatch extends Component {
  render() {
    return (
      <div style={noMatchStyle}>
        <img src="http://i.imgur.com/KsPIFpv.jpg" />
        <h2>..That page wasn't found.. <br /> Lets try starting over back <a href='/'>Here</a></h2>
      </div>  
    );
  }
}