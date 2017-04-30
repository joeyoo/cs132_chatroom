# cs132_chatroom -> realtime

Please ask llu@cs.brown.edu if you have trouble running the app. He graded my chatroom assignment before this and got it to work w/ babel.

Changes (i can remember right now) from chatrooms:
  - No longer need 'controllers' directory as no GET/POST requests are being made other than requesting the root '/'
  - AJAX logic is replaced with socketio logic
  - the number of users in each chatroom becomes updated in the RoomsList component
  - 'constants.js' in each state directory has been removed to remove redundancy when returning 'action.type' in the action creators (in actions.js and reducer.js). Instead of having to import the constants, which just return strings for action types, I now just return the string literals themselves

How to run:
  ** must install babel to run on department machines
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
        └── db/
            ├── database.js ----------------- db config and pool creation
            └── models/ --------------------- db helper models to assist as ORM
        ├── models/
        └── index.js ------------------------ SOCKETS CODE HERE
    └── client/
        ├── index.js ------------------------ root Component
        └── components/
            ├── { ComponentName }/ ---------- React Components
            └── App.js ---------------------- App Component
        └── state/
            ├── { ComponentName }/
                ├── actions.js --------------- Redux action creators
                ├── reducer.js --------------- Redux reducer
                └── index.js
            ├── actionsIndex.js
            └── rootReducer.js
        └── public/ -------------------------- Webpack bundle directory
            ├── bundle.js -------------------- Webpack bundle
            └── css/
