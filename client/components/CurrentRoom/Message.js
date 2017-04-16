import React, { PropTypes } from 'react';

import { Callout, Column } from 'react-foundation';

const Message = React.createClass({
  render() {
    return (
      <Callout className='message'>
        <p>
          <span className='message-username'>{this.props.sender}</span>: <span className='message-body'>{this.props.body}</span>
        </p>
      </Callout>
    )
  }
});

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Message;
