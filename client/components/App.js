import React from 'react';
import Foundation, {Row} from 'react-foundation';

// Import components //
import Header from './Header/Header';
import RoomList from './RoomList/RoomList';
import Room from './Room/Room';
import RoomDetails from './RoomDetails/RoomDetails';
import Footer from './Footer/Footer';


const App = React.createClass({
  render() {
    return(

      <Row large={12} id='app'>
        <Row large={12}>
          <Header />
        </Row>

        <Row large={12} id='main-content'>
          <RoomList />

          <Room />

          <RoomDetails />
        </Row>
      </Row>
    )
  }
});

export default App;
