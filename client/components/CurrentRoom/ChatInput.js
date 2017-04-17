import React from 'react';

import { Link } from 'react-foundation';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleKeyDown(e) {
    if (e.keyCode == 13 && e.ctrlKey) {
      e.preventDefault();
      e.currentTarget.value = e.currentTarget.value + "\n";
    }
    return true
  }
  handleKeyUp(e) {
    if (e.keyCode == 13 && !e.ctrlKey) {
      e.preventDefault();
      let message = {
        sender: this.props.username,
        body: e.currentTarget.value
      };

      this.props.onMessageSubmit(message, this.props.roomID);
      e.currentTarget.value = "";
    }
    return true
  }
  handleClick(e) {
    e.preventDefault();
    let message = {
      sender: this.props.username,
      body: e.currentTarget.parentNode.messageBody.value
    };

    this.props.onMessageSubmit(message, this.props.roomID);
    e.currentTarget.parentNode.messageBody.value = "";
  }
  render() {
    return(
      <form id="chat-input">
        <textarea name='messageBody' rows='3' cols='50' onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}></textarea>
        <Link onClick={this.handleClick} isExpanded>Send Message</Link>
      </form>
    )
  }
};

export default ChatInput;
