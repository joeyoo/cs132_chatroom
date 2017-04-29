import { CONSTANTS } from './index';

  export const updateRoomsList = (rooms) => {
    return {
      type: CONSTANTS.UPDATE_ROOMS_LIST,
      currentRooms: rooms
    }
  }
