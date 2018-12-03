CREATE TABLE login (
    id SERIAL PRIMARY KEY NOT NULL
    , username VARCHAR(255) UNIQUE NOT NULL
    , password VARCHAR(255) NOT NULL
);

INSERT INTO login(username, password) VALUES('emily', 'barrera');

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY NOT NULL
    , ingredients VARCHAR(500) NOT NULL
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY NOT NULL
    , name VARCHAR(500) NOT NULL
    , recipe_instructions VARCHAR NOT NULL
    , ingredients_id SMALLINT REFERENCES ingredients(id)
);

CREATE TABLE ingredients_recipes (
    id SERIAL PRIMARY KEY NOT NULL
    , ingredients_id SMALLINT REFERENCES ingredients(id)
    , recipes_id SMALLINT REFERENCES recipes(id)
);