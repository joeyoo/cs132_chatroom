import React, {PropTypes} from 'react';

import Message from './Message';

const MessagesContainer = React.createClass({
  componentDidMount() {
    // scroll to bottom
  },
  componentDidUpdate() {
    // scroll to bottom
  },
  render() {
    return(
      <ul className='menu vertical messagesContainer'>
        {this.props.messages.map(function(message) {
          return(<Message {...message} />)
        })}
      </ul>
    )
  }
});
const { arrayOf, instanceOf } = PropTypes;
MessagesContainer.propTypes = {
  messages: arrayOf(instanceOf(Message).isRequired)
}

export default MessagesContainer;
