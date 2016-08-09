import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import globalStyles from './assets/styles/global.css';

var roomStyle = {
  height: '250px',
  textAlign: 'center',
  fontFamily: 'arial',
  marginTop: '0px',
  fontFamily: 'Pattaya',
  fontSize: '22px',
  color: 'whitesmoke',
  textShadow: '-1px 1px 1px rgba(0,0,0,1)',
  backgroundImage:'url("http://i287.photobucket.com/albums/ll139/vmsg/Abstract%20sigs/abstract-waves-byvanesinger.png")', 
  backgroundColor:'#7edda3',
  backgroundPosition: 'center',
  opacity: .8,
  paddingTop: '20px',
}
//Original color for roomButtons #b2b8ba border, #7edda3
var roomButtonStyle = {
  margin: '10px',
  width: '100px',
  height: '50px',
  cursor: 'pointer',
  padding: '10px 20px',
  border: '1px solid #6B6B6B',
  borderRadius: '3px',
  background: '#28D67C',
  boxShadow: '2px 2px 2px 0 rgba(0,0,0,0.2)',
  textShadow: '-1px 1px 1px rgba(0,0,0,1)',
  color:'whitesmoke',
  fontSize: '16px',
  fontFamily: 'Pattaya',
}

var roomReturnStyle = {
  margin: '10px',
  width: '222px',
  height: '30px',
  clear:'both',
  cursor: 'pointer',
  border: '1px solid #333',
  borderRadius: '3px',
  background: '#b30000',
  boxShadow: '2px 2px 2px 0 rgba(0,0,0,0.2)',
  textShadow: '-1px 1px 1px rgba(0,0,0,1)',
  color:'whitesmoke',
  fontSize: '16px',
  fontFamily: 'Pattaya',
}

export default class RoomFinder extends Component {
  onCreate(e) {
    e.preventDefault()
    browserHistory.push('/room/:roomId')
  }

  onReturn(e) {
    e.preventDefault()
    browserHistory.push('/')
  }

  render() {
    return (
      <div style={roomStyle}>
        <h2>Welcome, {localStorage.getItem('nickname')}</h2>
        <h2>Choose Below to Create a Room or Join an Existing One</h2>
        <form>
          <input type="button" value="Create" style={roomButtonStyle} onClick={this.onCreate.bind(this)} />
          <input type="button" value="Join" style={roomButtonStyle} /> <br />
          <input type="button" value="Return to Login" style={roomReturnStyle} onClick={this.onReturn.bind(this)} />
        </form> 
      </div>      
    );
  }
}
