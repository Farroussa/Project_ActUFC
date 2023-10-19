const express = require('express');
const UFCRoutes = require('./routes');
const { addCommentBlog } = require('./controller.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/Accueil.html');
  });

app.use('/', UFCRoutes);  
app.listen(port, () => {
  console.log(`Server is active. port : ${port}`);
});

app.get('/controller.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
});

// Import necessary modules and functions

app.post('/addCommentBlog', (req, res) => {
  const commentData = req.body;

  addCommentBlog(commentData) // Now the function is defined and accessible
      .then(() => {
          res.status(201).send('Comment added in the blog!');
      })
      .catch((error) => {
          console.error(error);
          res.status(500).send('Failed to add the comment to the blog');
      });
});

// Your other routes and app.listen should remain the same


module.exports = app;