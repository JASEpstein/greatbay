DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;
USE greatbay_db;

CREATE TABLE items
(
    id INTEGER(10)
    AUTO_INCREMENT not null,
    itemName VARCHAR
    (30) null,
    startBid INTEGER
    (10) null,
    currentBid INTEGER
    (10) null,
    primary key
    (id)
);



