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
    └── client/
        ├── public/ -------------------- output directory for Webpack bundle
        ├── ReactComponents/ ----------- React Components unaware of Redux state
        └── ReduxState/ ---------------- files dealing w/ state (Redux)
            ├── actions/ --------------- Redux actions
            ├── connectedComponents/ --- React components connected to Redux
            └── reducers/ -------------- Redux reducers
    └── server/


### user story
1. user can create a room just by sending a message into an empty chat 
