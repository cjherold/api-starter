# api-starter
A simple server using express. Works great for an api to use with your React projects.

### Packages (Node v16.14.0)
* express
* express-handlebars
* dotenv
* nodemon

### Run
```sh
# run with nodemon
npm run dev
# run normal
npm start
```
### Notes so far...
### Setting up new routes
* Add the route in the routes folder
* Go into server.routes.js and connect the route (examples are in that file)

### Sending json
* I have a folder inside of routes called data
* You can store a big json or js file there and just import it into your route to keep things clean

### Error handleing
* The middelware that watches for errors needs to be at the bottom of the server.routes.js file
* After an error happens it passes from the route to the middleware
* Thrown errors should get caught by the error.js file and 404's will be passed to the next file (error404.js)

### Handlebars
* If you want you can render and send html
* My splash page index.handlebars is a good example of this
* Set layout to false if you don't have any layouts set up