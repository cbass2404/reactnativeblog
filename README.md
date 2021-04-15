## Blog app

---

A react native based app using expo to query the api using CRUD and manage a blog. The focus is on data management and not style.

## Setting up the environment

---

1. Navigate to the folder you want the project in and run the command:

```
$ git clone https://github.com/cbass2404/reactnativeblog
```

2. Navigate into the folder by typing:

```
$ cd reactnativeblog
```

3. Run the following command to install dependencies for the project:

```
$ npm install
```

4. Type the following to open your environment and server:

```
$ code . && npm start
```

5. Setup your blog_json_server from the following place, instructions in README:

https://github.com/cbass2404/blog_json_server

_Set it up in a seperate folder and environment_

6. Create a folder in your main directory named api, inside the folder create a file named jsonServer.js and paste in the following:

```javascript
import axios from "axios";

export default axios.create({
    baseURL: "ngrok address",
});
```

_Replace ngrok address with the forwarding tunnel address created by ngrok in the server_

## JSON-Server Routes

---

```
Method          Route            Result
_________________________________________

GET             /blogposts       Retrieve all stored blog posts

GET             /blogposts/{id}  Get blog post with particular ID

POST            /blogposts       Create a new blog post

PUT             /blogposts/{id}  Update blog post with given ID

DELETE          /blogposts/{id}  Delete blog post with given ID
```
