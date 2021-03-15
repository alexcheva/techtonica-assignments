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