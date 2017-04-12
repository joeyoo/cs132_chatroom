# cs132_chatroom

How to run:
  1. 'npm run dev-server' to run server
  2. 'npm run dev-client' to run client
  3. open 'http://localhost:3000' to run client **'port 8080 is the express server'

### Database Schema:
    Chatroom {
      id: text(generated alphanumeric id),
      name: "name"
    }

    Message {
      id: integer,
      body: text,
      chatroom_id: text,
      username: text
    }

### DIRECTORY STRUCTURE:
    chatroom_concentrator/
    ├── index.html
    ├── webpack.config.js
    ├── .babelrc
    └── apiBackend/
        ├── controllers/
        └── db/
            └── models/
        ├── models/
        └── index.js
    └── client/
        ├── index.js
        └── modules/
            └── { ModuleName }
                ├── components/ -------------- React Components
                ├── actions.js --------------- Redux actions
                ├── connectedComponents/ ----- Redux-connected React Components
                └── reducers.js -------------- Redux reducers
        └── public/ -------------------------- Webpack bundle directory
            ├── bundle.js
            └── css/
