## Blog app

---

A react native based app using expo to query the api using CRUD and manage a blog. The focus is on data management and not style.

### Setting up the environment

---

First navigate to the folder you want the project in and run the command:

```
$ git clone https://github.com/cbass2404/reactnativeblog
```

Next navigate into the folder by typing:

```
$ cd reactnativeblog
```

Now, run the following command to install dependencies for the project:

```
$ npm install
```

Then type the following to open your environment and server:

```
$ code . && npm start
```

Inside of the src directory, create a folder called api, inside the folder create a file called yelp.js and populate it like so from your yelp.com/fusion account settings (business api):

```javascript
import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer YELP_SECRET_KEY",
    },
});
```
