const express = require('express');
const UFCRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Hello World!");
    //res.sendFile(__dirname + '/public/HTML/Accueil.html');
  });

app.use('/api/v1/UFC', UFCRoutes);  

app.listen(port, () => {
  console.log(`Server is active. port : ${port}`);
});

module.exports = app;