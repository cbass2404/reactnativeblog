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

Setup your blog_json_server from the following place, instructions in README:

https://github.com/cbass2404/blog_json_server

_Set it up in a seperate folder and environment_

## Json-server Routes

```
Method          Route            Result
___________________________________________________________________
GET             /blogposts       Retrieve all stored blog posts

GET             /blogposts/{id}  Get blog post with particular ID

POST            /blogposts       Create a new blog post

PUT             /blogposts/{id}  Update blog post with given ID

DELETE          /blogposts/{id}  Delete blog post with given ID
```
