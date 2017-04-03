import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { Actions } from '../state/index';
const { setCurrentRoom } = Actions;

const ClickableRoom = React.createClass({
  handleRoomClick(event) {
    event.preventDefault();
    this.props.dispatch(setCurrentRoom(this.props))
  },
  render() {
    return(
      <li>
        <a onClick={this.props.handleRoomClick}>{this.props.id}</a>
      </li>
    )
  }
})


ClickableRoom.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleRoomClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRoomClick: () => {
      dispatch(setCurrentRoom(ownProps))
    }
  }
}

export default connect(null, mapDispatchToProps)(ClickableRoom);
