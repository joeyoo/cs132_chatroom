import React, {Component} from 'react';
import Foundation, {Row, Column} from 'react-foundation';

// Import components //
import Header from './Header';
import RoomList from './RoomList/RoomList';
import CurrentRoom from './CurrentRoom/CurrentRoom';
import RoomDetails from './RoomDetails';
import Footer from './Footer';

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

          <CurrentRoom />

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
