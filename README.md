# cs132_chatroom

TODO:
1. Async update RoomList when clicking CreateRoomButton

I would love to meet with a TA, so we can laugh at how f***ed I am... then, if possible, try to salvage any possible points in the assignment portion of the class.

The only reason I even bother still asking for some sort of help is because I strongly believe that I've put in a great deal of time working on these assignments, alongside learning and implementing the technologies (i.e. React + it's SEVERAL tools such as Redux) as well as the reasoning for their best-practice methods. Did I mention I'm making an app (w/ awesome group members) for the final project? If you look at my git commit history, you'll see many revisions of essentially the same function for reasons of making a better app, and not necessarily for a cs132_[hw]_handin.

I still turned this assignment in disturbingly late and struggled to be proactive in communicating my progress(lack thereof). I just ask for a slight pardon as well as the assistance of any TAs that might be willing to bear being annoyed by me for the rest of the semester.

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
