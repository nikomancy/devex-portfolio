---
title: Super Simple API Tutorial
sidebar_position: 2
---

If you want to learn how to program or just improve your web development fundamentals, one of the best things you can do is make a few pieces of CRUD. In this case, CRUD stands for:
- Create
- Read
- Update
- Delete

Let's walk through the process of creating possibly the simplest REST API imaginable using Node.js and Express. This API will perform basic CRUD (Create, Read, Update, Delete) for a generic set of `items`.

## Prerequisites
To build this API, you will need the following:
- [Node.js](https://nodejs.org/en) installed on your machine.
- Basic understanding of JavaScript and Node.js.
- A text editor (like [VS Code](https://code.visualstudio.com/)) and a command line interface.

## Setting Up the Project
Let's begin by making a home for your project. Create a new directory for your project and navigate into it using your terminal:

```bash
mkdir my-api
cd my-api
```

Initialize a new Node.js project within the folder by running the following command:

```bash
npm init -y
```

Next, we're going to avoid dealing with Node's unfriendly default library for handling HTTP requests and install [Express](https://expressjs.com/) instead:

```bash
npm install express
```

## Building Your Express App
Create a new file called `app.js` in your main project directory. Then, add the following code to `app.js`:

```javascript
const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;
```

Here, we're doing three things:
1. Importing and initializing express into our app.
2. Adding Express's middleware for parsing JSON wit the `app.use()` method.
3. Setting up the port where you can access your app.

## Defining Routes

Now that we have the shell for our app, we can create a basic route to test our server. Add to `app.js`:

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Add this code to the bottom of your `app.js`:

```javascript
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

Run your application using the command:

```bash
node app.js
```

Visit `http://localhost:3000` in a browser to see the output.

## Coding your CRUD Operations
Before we start adding endpoints to our API, let's set up a short term solution to have the application handle. In your code, create an array of items:

```javascript
const items = [{ id: 1, name: 'Item 1' }];
```

Since we don't want this app to get too complicated too quickly, we're going to use an array as a fake-database. The application will not have any persistent storage to start and will lose all of its stored `items` as soon as you close the application.


### Implementing Create
Let's start by making it possible to add items to the API by adding the following to your code:

```javascript
app.post('/items', (req, res) => {
  const newItem = { 
    id: items.length + 1, 
    name: req.body.name 
  };
  items.push(newItem);
  res.status(201).send(newItem);
});
```

### Implementing Read
Read operations let a user retrieve data from your API without altering anything. Add the following code to implement a basic read endpoint.

```javascript
app.get('/items', (req, res) => {
  res.send(items);
});
```

### Implementing Update
Update methods allow you to point to an existing object available through the API without creating a new record. Add the following code to your app.js file:

```javascript
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found.');
  item.name = req.body.name;
  res.send(item);
});
```

### Implementing Delete
Finally, let's add an endpoint to let users delete their work.

```javascript
app.delete('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found.');

  const index = items.indexOf(item);
  items.splice(index, 1);
  res.send(item);
});
```

## Wrapping Up
Awesome! You've just made a REST API in Node.js. It's pretty simple but everything has to start somewhere.
