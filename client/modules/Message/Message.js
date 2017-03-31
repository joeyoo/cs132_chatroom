import React from 'react';

class Message extends React.component {
  render() {
    return (
      <div className='message'>
        <h5>{this.props.senderName}</h5>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
