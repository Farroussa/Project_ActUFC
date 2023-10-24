const express = require('express');
const UFCRoutes = require('./routes');

const app = express();

const port = process.env.PORT || 3000;

const controller = require('./controller');

app.use(express.json());
app.use(express.static('public'));

//this line was added by the teacher.
app.get('/', controller.GetUFC)
   
app.use('/api/v1/UFC', UFCRoutes);  

app.listen(port, () => {
  console.log(`Server is active. port : ${port}`);
});

module.exports = app;