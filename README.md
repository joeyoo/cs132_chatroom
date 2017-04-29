# cs132_chatroom -> realtime


TODO:
1. return usernames and not socket.id in userlist(RoomDetails)
2. filter out client's own username/id in userlist(RoomDetails)

How to run:
  1. 'npm run dev-server' to run server
  2. 'npm run dev-client' to run client
  3. open 'http://localhost:3000' to run client **port 8080 is the express server*

### Database Schema:
    Chatroom {
      id: text              // generated alphanumeric id
    }

    Message {
      id: integer,
      sender: text,
      room_id: text,
      body: text,
      created_at: datetime
    }

### DIRECTORY STRUCTURE:
    realtime/
    ├── index.html
    └── apiBackend/
        ├── controllers/ -------------------- app controllers
        └── db/
            ├── database.js ----------------- db config and pool creation
            ├── seed.js --------------------- seed file
            └── models/ --------------------- db helper models to assist as ORM
        ├── models/
        └── index.js
    └── client/
        ├── index.js
        └── components/
            └── { ComponentName }/ ----------- React Components
                ├── actions.js --------------- Redux actions
                ├── connectedComponents/ ----- Redux-connected React Components
                └── reducers.js -------------- Redux reducers
        └── state/
            ├── { ComponentName }/
                ├── actions.js --------------- Redux actions(or action creators)
                ├── constants.js ------------- Redux constants (or actions)
                ├── reducer.js --------------- Redux reducer
                └── index.js
            ├── actionsIndex.js
            └── rootReducer.js
        └── public/ -------------------------- Webpack bundle directory
            ├── bundle.js -------------------- Webpack bundle
            └── css/
