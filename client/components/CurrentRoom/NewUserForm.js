import React from 'react';
import { connect } from 'react-redux';

import { sessionActions } from '../../state/actionsIndex';
const {joinRoom} = sessionActions;

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(joinRoom(event.currentTarget.username.value, this.props.roomID));
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Before you can start talking to yourself, you need to create a username:
          <input type='text' name='username' />
        </label>
        <input type='submit' />

      </form>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    roomID: state.session.currentRoom.id
  }
}

export default connect(mapStateToProps)(NewUserForm);
