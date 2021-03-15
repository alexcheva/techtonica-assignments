# Eventonica
## Event Management project
![eventonica screenshot](https://github.com/alexcheva/techtonica-assignments/blob/main/eventonica/eventonica-part-2/eventonica.png?raw=true)
JS Classes are in `models.js`.

DOM manipulation is in `main.js`.

HTML is in `index.html`.

Express is in `index.js`.

Creating database in Postgres:
`create database eventonica;`

Connect to the database we created:

`\c eventonica`

Create users table:
`CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR (20) CHECK(username NOT LIKE '%?%/%') UNIQUE,
        firstName VARCHAR,
        lastName VARCHAR,
        email VARCHAR (100) CHECK(email LIKE '%@%') UNIQUE 
        );`
Create events table:
`CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        name TEXT,
        category VARCHAR,
        location VARCHAR,
        date DATE,
        time TIME,
        price INT,
        user_id SERIAL NOT NULL,
        CONSTRAINT fk_user
                FOREIGN KEY(user_id)
                        REFERENCES users(id)
                        );`

Create fav_events table:
`CREATE TABLE fav_events (
        id SERIAL PRIMARY KEY,
        event_id SERIAL NOT NULL,
        user_id SERIAL NOT NULL,
        CONSTRAINT fk_event
                FOREIGN KEY(event_id)
                        REFERENCES events(id),
        CONSTRAINT fk_user
                FOREIGN KEY(user_id)
                        REFERENCES users(id)
                        );
`

Insert test users:
`INSERT INTO users (username, firstname, lastname, email) VALUES ('alexpeach', 'Alex', 'Peach', 'alex@peach.com');`
`INSERT INTO users (username, firstname, lastname, email) VALUES ('tomCruize', 'Tom', 'Cruiz', 'tom@tomcruize.com');`
`INSERT INTO users (username, firstname, lastname, email) VALUES('dickTracy', 'Richard', 'Tracy', 'dickTracy@gmail.com');`

Insert test events:
`INSERT INTO events (name, category, location, date, time, price, user_created) VALUES ('HIM', 'concert', 'UCT', '05-12-2021', '12:00 PM', 55, 2);`
`INSERT INTO events (name, category, location, date, time, price, user_created) VALUES ('POD', 'concert', 'UCT', '10-21-2021', '06:00 PM', 55, 2);`
`INSERT INTO events (name, category, location, date, time, price, user_created) VALUES ('Christian Rave', 'gathering', 'Church', '03-19-2021', '17:30', 0, 2);`

Insert test fav_events:

`INSERT INTO fav_events (event_id, user_id) VALUES (3, 3);`
`INSERT INTO fav_events (event_id, user_id) VALUES (1, 2);`
`INSERT INTO fav_events (event_id, user_id) VALUES (2, 2);`

