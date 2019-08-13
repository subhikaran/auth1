module.exports = `
CREATE TABLE user (
    id serial primary key,
    name varchar(100),
    email text unique notnull,
    hash varchar(100)
);`