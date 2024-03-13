"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[904],{2892:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(7624),s=i(2172);const r={title:"Super Simple API Tutorial",sidebar_position:2},a=void 0,o={id:"simplest-api",title:"Super Simple API Tutorial",description:"If you want to learn how to program or just improve your web development fundamentals, one of the best things you can do is make a few pieces of CRUD. In this case, CRUD stands for:",source:"@site/docs/simplest-api.md",sourceDirName:".",slug:"/simplest-api",permalink:"/devex-portfolio/docs/simplest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/simplest-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Super Simple API Tutorial",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Portfolio",permalink:"/devex-portfolio/docs/intro"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up the Project",id:"setting-up-the-project",level:2},{value:"Building Your Express App",id:"building-your-express-app",level:2},{value:"Defining Routes",id:"defining-routes",level:2},{value:"Coding your CRUD Operations",id:"coding-your-crud-operations",level:2},{value:"Implementing Create",id:"implementing-create",level:3},{value:"Implementing Read",id:"implementing-read",level:3},{value:"Implementing Update",id:"implementing-update",level:3},{value:"Implementing Delete",id:"implementing-delete",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"If you want to learn how to program or just improve your web development fundamentals, one of the best things you can do is make a few pieces of CRUD. In this case, CRUD stands for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create"}),"\n",(0,t.jsx)(n.li,{children:"Read"}),"\n",(0,t.jsx)(n.li,{children:"Update"}),"\n",(0,t.jsx)(n.li,{children:"Delete"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's walk through the process of creating possibly the simplest REST API imaginable using Node.js and Express. This API will perform basic CRUD (Create, Read, Update, Delete) for a generic set of ",(0,t.jsx)(n.code,{children:"items"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To build this API, you will need the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/en",children:"Node.js"})," installed on your machine."]}),"\n",(0,t.jsx)(n.li,{children:"Basic understanding of JavaScript and Node.js."}),"\n",(0,t.jsxs)(n.li,{children:["A text editor (like ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),") and a command line interface."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-the-project",children:"Setting Up the Project"}),"\n",(0,t.jsx)(n.p,{children:"Let's begin by making a home for your project. Create a new directory for your project and navigate into it using your terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir my-api\ncd my-api\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialize a new Node.js project within the folder by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm init -y\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, we're going to avoid dealing with Node's unfriendly default library for handling HTTP requests and install ",(0,t.jsx)(n.a,{href:"https://expressjs.com/",children:"Express"})," instead:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install express\n"})}),"\n",(0,t.jsx)(n.h2,{id:"building-your-express-app",children:"Building Your Express App"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new file called ",(0,t.jsx)(n.code,{children:"app.js"})," in your main project directory. Then, add the following code to ",(0,t.jsx)(n.code,{children:"app.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const express = require('express');\nconst app = express();\napp.use(express.json());\n\nconst port = 3000;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here, we're doing three things:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Importing and initializing express into our app."}),"\n",(0,t.jsxs)(n.li,{children:["Adding Express's middleware for parsing JSON wit the ",(0,t.jsx)(n.code,{children:"app.use()"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"Setting up the port where you can access your app."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defining-routes",children:"Defining Routes"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have the shell for our app, we can create a basic route to test our server. Add to ",(0,t.jsx)(n.code,{children:"app.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add this code to the bottom of your ",(0,t.jsx)(n.code,{children:"app.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.listen(port, () => {\n  console.log(`Server running at http://localhost:${port}/`);\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run your application using the command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node app.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.code,{children:"http://localhost:3000"})," in a browser to see the output."]}),"\n",(0,t.jsx)(n.h2,{id:"coding-your-crud-operations",children:"Coding your CRUD Operations"}),"\n",(0,t.jsx)(n.p,{children:"Before we start adding endpoints to our API, let's set up a short term solution to have the application handle. In your code, create an array of items:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const items = [{ id: 1, name: 'Item 1' }];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since we don't want this app to get too complicated too quickly, we're going to use an array as a fake-database. The application will not have any persistent storage to start and will lose all of its stored ",(0,t.jsx)(n.code,{children:"items"})," as soon as you close the application."]}),"\n",(0,t.jsx)(n.h3,{id:"implementing-create",children:"Implementing Create"}),"\n",(0,t.jsx)(n.p,{children:"Let's start by making it possible to add items to the API by adding the following to your code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.post('/items', (req, res) => {\n  const newItem = { \n    id: items.length + 1, \n    name: req.body.name \n  };\n  items.push(newItem);\n  res.status(201).send(newItem);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"implementing-read",children:"Implementing Read"}),"\n",(0,t.jsx)(n.p,{children:"Read operations let a user retrieve data from your API without altering anything. Add the following code to implement a basic read endpoint."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.get('/items', (req, res) => {\n  res.send(items);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"implementing-update",children:"Implementing Update"}),"\n",(0,t.jsx)(n.p,{children:"Update methods allow you to point to an existing object available through the API without creating a new record. Add the following code to your app.js file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.put('/items/:id', (req, res) => {\n  const item = items.find(i => i.id === parseInt(req.params.id));\n  if (!item) return res.status(404).send('Item not found.');\n  item.name = req.body.name;\n  res.send(item);\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"implementing-delete",children:"Implementing Delete"}),"\n",(0,t.jsx)(n.p,{children:"Finally, let's add an endpoint to let users delete their work."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.delete('/items/:id', (req, res) => {\n  const item = items.find(i => i.id === parseInt(req.params.id));\n  if (!item) return res.status(404).send('Item not found.');\n\n  const index = items.indexOf(item);\n  items.splice(index, 1);\n  res.send(item);\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping Up"}),"\n",(0,t.jsx)(n.p,{children:"Awesome! You've just made a REST API in Node.js. It's pretty simple but everything has to start somewhere."})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>a});var t=i(1504);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);