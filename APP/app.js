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

app.get('/post/:id', (req, res) => {
  // retreve post form posts , matching id in the passed query
  const post = posts.filter(post => {
    return post.id === req.params.id;
  });
  // render the matching post, and pass past details as params.
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.....`);
});
