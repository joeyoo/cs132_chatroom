# chatroom

## What was supposed to be an average homework assignment to learn about sockets turned into a personal challenge to make a client-server app with React+Redux+tools and an API Backend using Express and a simple ORM

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
