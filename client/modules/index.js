// COMPONENTS //

import Header from './Header/Header';
import RoomList from './RoomList/Roomlist';
import Room from './Room/Room';
import RoomDetails from './RoomDetails/RoomDetails';
import Footer from './Footer/Footer';

export {Header, RoomList, Room, RoomDetails, Footer}

// STATE //

// Import reducers
import RoomListReducer from './RoomList/reducer';

// Import configStore function
import configStore from './global/configStore';

const reducers = {
  RoomListReducer
}

export const store = configStore(reducers);
