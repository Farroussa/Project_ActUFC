const knexfile = require('./knexfile.js');
const knex = require('knex')(knexfile.development);;
  
const GetUFC = (req, res) => {
console.log("the fighters are :");

knex
    .select()
    .from('Fighters')
    .then((rows) => {
    res.status(200).json(rows);
    })
    .catch((error) => {
    throw error;
    });
};

const addFighter = (req, res) => {
const { FirstName, LastName, Nickname, WeightClass, Country } = req.body;

knex('fighters') // Replace 'fighters' with the actual name of your table
    .insert({
    FirstName,
    LastName,
    Nickname,
    WeightClass,
    Country,
    })
    .then(() => {
    res.status(201).send('Fighter added !');
    })
    .catch((error) => {
    throw error;
    });
};

const addComment = (req, res) => {
const { ArticleID, CommenterNickname, CommentDate, CommentText } = req.body;

knex('Comments')
    .insert({
    ArticleID,
    CommenterNickname,
    CommentDate,
    CommentText,
    })
    .then(() => {
    res.status(201).send('Comment added !');
    })
    .catch((error) => {
    throw error;
    });
};

const addCommentBlog = (data) => {
    const { Nickname, BlogComment } = data;

    return knex('BlogComments')
        .insert({
            Nickname,
            BlogComment,
        })
        .then(() => {
            // Comment added successfully
        })
        .catch((error) => {
            console.error(error);
            throw error; // Make sure to re-throw the error to propagate it to the promise chain
        });
};



module.exports = {
GetUFC,
addFighter,
addComment,
addCommentBlog
};
