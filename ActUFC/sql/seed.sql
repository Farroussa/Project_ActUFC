 
INSERT INTO Events (EventID, EventName, EventDate, Location, MainEventFightID)
VALUES
    (1, 'UFC 1', '1993-11-12', 'Irvine, california', 1),
    (2, 'UFC 2', '2009-07-11', 'Las Vegas, Nevada', 2);

INSERT INTO Fighters (FighterID, FirstName, LastName, Nickname, WeightClass, Country, EventID)
VALUES
    (1, 'Ciryl', 'Gane', 'Bon Gamin', 'Heavyweight ', 'France', 2),
    (2, 'Jon', 'Jones', 'Bones', 'Heavyweight', 'USA', 2),;

INSERT INTO NewsArticles (ArticleID, Title, Author, PublicationDate, Content, EventID, FighterID)
VALUES
    (1, 'The news of the 30/09/2023', 'Nael', '1993-11-13', 'A lot happened this week, lets check it out together', 1, NULL),
    (2, 'Who will win this year?', 'Clarisse', '2020-05-20', 'The best fighters are in competition, who will win?', 2, 2);

INSERT INTO Comments (CommentID, ArticleID, CommenterNickname, CommentDate, CommentText)
VALUES
    (1, 1, 'FARES', '2023-05-21', 'COOL FIGHT BROS'),
    (2, 2, 'ARTHUR', '2023-05-22', 'i love mma');

INSERT INTO BlogComments (Nickname, BlogComment)
VALUES ('Farès', 'Great blog!'),
       ('Nael', 'Go UFC!');
