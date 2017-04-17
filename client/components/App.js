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
      <Row id='app' className='large-12'>

        <Row id='header' className='large-12'>
          <Header />
        </Row>

        <Row id='main-content' className='large-12'>
          <RoomList/>

          <CurrentRoom />

          <RoomDetails />
        </Row>

        <Row id="footer" className='large-12'>
          <Footer />
        </Row>

      </Row>
    )
  }

}


export default App;
