// require express
const express = require('express');

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
];
// initiated express
const app = express();

// set ejs as view engine
app.set('view engine', 'ejs');

// route to home page
app.get('/', (req, res) => {
  // render home page with posts passed as params to home.ejs
  res.render('home', { posts });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.....`);
});
