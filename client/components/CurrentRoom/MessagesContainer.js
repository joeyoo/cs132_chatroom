import React, {PropTypes} from 'react';

import Message from './Message';

const MessagesContainer = React.createClass({
  render() {
    return(
      <ul className='menu vertical chatroom'>
        {this.props.messages.map(function(message) {
          return(<Message {...message} />)
        })}
      </ul>
    )
  }
});
const { arrayOf, instanceOf, func, string } = PropTypes;
MessagesContainer.propTypes = {
  messages: arrayOf(instanceOf(Message).isRequired)
}

export default MessagesContainer;
