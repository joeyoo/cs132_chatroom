# cs132_chatroom

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
