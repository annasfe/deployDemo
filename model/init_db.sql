--
-- Not needed, done in mysql server directly
-- CREATE DATABASE ghibli;
-- USE ghibli;
--

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    img VARCHAR(256) NOT NULL,
    favorite BOOLEAN,
    year INTEGER NOT NULL
);

INSERT INTO movies (title, img, favorite, year) VALUES
("My neighbor totoro", "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/220px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg", FALSE, 1988), 
("Spirited Away","https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png", FALSE, 2001),
("Kiki's Delivery Service", "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg", FALSE, 1989),
("Howl's Moving Castle", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Howls-moving-castleposter.jpg/220px-Howls-moving-castleposter.jpg", FALSE, 2004);