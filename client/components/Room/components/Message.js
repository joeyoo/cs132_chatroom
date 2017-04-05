import React, { PropTypes } from 'react';

import { Callout, Column } from 'react-foundation';

const Message = React.createClass({
  render() {
    return (
      <Callout class='message'>
        <Column small={3}>
          <h5>{this.props.sender}</h5>
        </Column>
        <Column small={9}>
          <p>{this.props.body}</p>
        </Column>
      </Callout>
    )
  }
});

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Message;
