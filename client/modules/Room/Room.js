import React from 'react';
import {Column, Link} from 'react-foundation';

const Room = React.createClass({
  render() {
    return(
      <Column large={7} className='chatroom'>
        <ul className='menu vertical chatroom'>
          <li className='menu-text'>Current Room</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>

        </ul>
        <textarea rows='4' cols='50'></textarea>
        <Link isExpanded>Send</Link>
      </Column>
    )
  }
});

export default Room;
