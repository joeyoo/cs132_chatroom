import React, {PropTypes} from 'react';
import Scroll, { animateScroll } from 'react-scroll';

import Message from './Message';

const MessagesContainer = React.createClass({
  componentDidUpdate() {
    animateScroll.scrollToBottom({
      containerId: 'messagesContainer'
    });
  },
  render() {
    let messages = this.props.messages;

    return(
      <ul id='messagesContainer' className='menu vertical'>
        {messages.map(function(message) {
          return(<Message {...message} name={message.id} key={message.id}/>)
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
