import React, {Component} from 'react';
import Foundation, {Row, Column} from 'react-foundation';

// Import components //
import Header from './Header/Header';
import RoomList from './RoomList/RoomList';
import Room from './Room/Room';
import RoomDetails from './RoomDetails/RoomDetails';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return(
      <Row large={12} id='app'>
        <Row large={12}>
          <Header />
        </Row>

        <Row large={12} id='main-content'>
          <Column large={2}>
            <RoomList/>
          </Column>

          <Room />

          <RoomDetails />
        </Row>
        <Row large={12} id="footer">
          <Footer />
        </Row>
      </Row>
    )
  }

}


export default App;
