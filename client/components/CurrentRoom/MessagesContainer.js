import React, {PropTypes} from 'react';
import Scroll, { animateScroll } from 'react-scroll';

import Message from './Message';

const MessagesContainer = React.createClass({
  componentDidMount() {
    animateScroll.scrollToBottom();
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
