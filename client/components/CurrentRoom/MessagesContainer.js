import React, {PropTypes} from 'react';
import Scroll, { animateScroll } from 'react-scroll';

import Message from './Message';

class MessagesContainer extends React.Component {
  componentDidUpdate() {
    animateScroll.scrollToBottom({
      containerId: 'messagesContainer'
    });
  }
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
};

export default MessagesContainer;
