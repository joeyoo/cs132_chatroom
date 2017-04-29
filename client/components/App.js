import React, {Component} from 'react';
import Foundation, {Row, Column} from 'react-foundation';
import {connect} from 'react-redux';
import {socket} from '../index';

// Import components //
import Header from './Header';
import RoomList from './RoomList/RoomList';
import CurrentRoom from './CurrentRoom/CurrentRoom';
import NewUserForm from './CurrentRoom/NewUserForm';
import RoomDetails from './RoomDetails';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.content;
  }

  render() {
    if (this.props.selectedRoom.id) {
      if (this.props.joinedRooms[this.props.selectedRoom.id]) {
        this.content = <CurrentRoom />
      }
      else {
        this.content = <NewUserForm roomID={this.props.selectedRoom.id}/>
      }
    }

    return(
      <Row id='app' className='large-12'>

        <Row id='header' className='large-12'>
          <Header />
        </Row>

        <Row id='main-content' className='large-12'>
          <RoomList/>

          {this.content}

          <RoomDetails />
        </Row>

        <Row id="footer" className='large-12'>
          <Footer />
        </Row>

      </Row>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    selectedRoom: state.session.selectedRoom,
    joinedRooms: state.session.joinedRooms
  }
}
export default connect(mapStateToProps)(App);
