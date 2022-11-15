USE app-db;

CREATE TABLE people (
    id integer not null auto_increment,
    name varchar(200),
    primary key(id)
);

INSERT INTO people(name) values('Wesley');