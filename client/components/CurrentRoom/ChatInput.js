import React from 'react';

import { Link } from 'react-foundation';

const ChatInput = React.createClass({
  render() {
    return(
      <div>
        <textarea rows='4' cols='50'></textarea>
        <Link isExpanded>Send</Link>    
      </div>
    )
  }
});

export default ChatInput;
