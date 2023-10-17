const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const knexfile = require('./knexfile.js');
const knex = require('knex')(knexfile.development);
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/Accueil.html');
  });

app.get('/About.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/About.html');
  }
);
app.get('/Accueil.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/Accueil.html');
  });


app.get('/News.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/News.html');
  }
);

app.get('/Quizz.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/Quizz.html');
  });

app.get('/Ranking.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/Ranking.html');
  }
);

app.get('/Suggestions.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/Suggestions.html');
  }
);

app.get('/YourArticle.html', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/YourArticle.html');
  }
);

app.listen(port, () => {
    console.log(`Server is active. port : ${port}`);
});

module.exports = app;

/*
// Path: knex.js
// creation
app.post('/createComment', (req, res) => {
    const { CommentID,ArticleID, CommenterNickname, CommentDate, CommentText } = req.body;
    knex('Comments')
        .returning(['CommentID', 'ArticleID', 'CommenterNickname', 'CommentDate', 'CommentText'])
        .insert({
            CommentID,
            ArticleID,
            CommenterNickname,
            CommentDate,
            CommentText
        })
        .then((insertedRecords) => {
            const newComment = insertedRecords[0];
            res.json(newComment);
        })
        .catch((error) => {
            console.error('Error inserting comment:', error);
            res.status(500).json({ error: 'Failed to insert comment' });
        });
});

//retrieval  
app.get('/searchFighters', (req, res) => {
    const searchTerm = req.query.firstName;
    knex('Fighters')
        .where('FirstName', 'like', `%${searchTerm}%`)
        .select('FighterID', 'FirstName', 'LastName', 'Nickname', 'WeightClass', 'Country', 'EventID')
        .then((searchResults) => {
            res.json(searchResults);
        })
        .catch((error) => {
            console.error('Error searching for fighters:', error);
            res.status(500).json({ error: 'Failed to perform search' });
        });
});

//update
app.put('/updateEvent/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    try {
      await knex('Events')
        .where({ EventID: id })
        .update(changes);
  
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to update event' });
    }
  });

  */