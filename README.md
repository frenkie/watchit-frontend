# watchit-frontend

Front end of the [Watchit](https://github.com/frenkie/watchit-service) 
video bookmark service, with which you can create a unified video
playlist regardless of video origin.



## Running it yourself

### install
Running `npm install` should do the trick. Pre requisites are that you
have a running [MongoDB](https://www.mongodb.com) instance, either 
locally or remotely.
A service like [MongoLab](https://mongolab.com) can provide the latter
very easily.
You should also have a running [Watchit Service](https://github.com/frenkie/watchit-service)
with a user and preferably some saved videos.

### configuration
Watch It uses Mongodb as a database. To connect to the database you have
to set a `MONGODB_URI` environment variable with a fully authenticated
URI to a Mongo DB database.
Example:

`mongodb://<user>:<password>@hostname:port/database`

### users
To be able to see video's the database should be configured with a
watcher user as specified in the 
[Watchit Service docs](https://github.com/frenkie/watchit-service#users)
 
### running 
With a MongoDB and watcher user setup you can run the front end through:

`MONGODB_URI=mongodb://mongodb-uri npm start`

Or just

`npm start` if you already set the `MONGODB_URI` environment variable.