import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { Column, Colors } from 'react-foundation';

import { globalActions } from '../../../state/actionsIndex';
const {setCurrentRoom} = globalActions;

const ClickableRoom = React.createClass({
  handleRoomClick(event) {
    event.preventDefault();

    if (!this.props.myUsername) {
      // PROMPT USER TO CREATE USERNAME
    }
    else {
      // the redux store will have a username for this session
      // so just do the usual
    }
    this.props.dispatch(setCurrentRoom(this.props));
  },
  render() {
    return(
      <li>
        <Column small={10}>
          <a onClick={this.props.handleRoomClick}>{this.props.id}</a>
        </Column>
        <Column small={2} color={Colors.ALERT}>
          <p></p>
        </Column>
      </li>
    )
  }
})


ClickableRoom.propTypes = {
  id: PropTypes.string.isRequired,
  handleRoomClick: PropTypes.func.isRequired,
  userCount: PropTypes.number,
  myUsername: PropTypes.string
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRoomClick: () => {
      dispatch(setCurrentRoom(ownProps))
    }
  }
}

export default connect(null, mapDispatchToProps)(ClickableRoom);
