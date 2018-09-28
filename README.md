Run:

npm start

Requirements:

npm i mongoose

npm i redis

Minimal usage:

Tail '.cache()' after any MongoDB query if wished to be mediated by Redis

Apply the 'clearCache' middleware at any request handler possibly storing to MongoDB
