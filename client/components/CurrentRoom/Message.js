import React, { PropTypes } from 'react';

import { Callout, Column } from 'react-foundation';

class Message extends React.Component {
  render() {
    return (
      <Callout className='message'>
        <p>
          <span className='message-username'>{this.props.sender}</span>: <span className='message-body'>{this.props.body}</span>
        </p>
      </Callout>
    )
  }
};

export default Message;
