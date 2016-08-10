import React, {Component} from 'react';
import {chat} from './stores.jsx';

var deleteStyle = {
  display: 'inline',
  textAlign:'center',
  marginLeft: '10px',
  border: 'none',
  backgroundColor: '#efefef',
  cursor: 'pointer',
}

var itemStyle = {
  borderTop: '1px solid #fff',
  borderBottom: '1px solid #d7d7d7',
  backgroundColor: '#efefef',
  paddingLeft: '8px',
}

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.props.chat.watch().subscribe((result) => {
      this.setState({messages: result});
    })
  }

  render() {

    return (
      <div>
        {this.state.messages.map((message) => {
         return (
         <MessageItem id={message.id} author={message.author} text={message.text} /> 
         ) 
        })}
      </div>
    );
  }
}

class MessageItem extends Component {
  onDeleteClick(e) {
    chat.remove(this.props.id)
  }

  render() {
    return (
      <div>  
        <div key={this.props.id} style={itemStyle}>
          <strong>{this.props.author}:</strong> {this.props.text} 
            <button onClick={this.onDeleteClick.bind(this)} style={deleteStyle} >&#10060;</button>
        </div>
      </div>
    );  
  }                
}