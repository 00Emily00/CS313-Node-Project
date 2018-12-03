CREATE TABLE login (
    id SERIAL PRIMARY KEY NOT NULL
    , username VARCHAR(255) UNIQUE NOT NULL
    , password VARCHAR(255) NOT NULL
);

INSERT INTO login(username, password) VALUES('emily', 'barrera');

CREATE TABLE ingredient_names (
    id SERIAL PRIMARY KEY NOT NULL
    , ingredients VARCHAR(500) NOT NULL
);
CREATE TABLE recipe_instructions (
    id SERIAL PRIMARY KEY NOT NULL
    , instructions TEXT NOT NULL
);
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY NOT NULL
    , name VARCHAR(500) NOT NULL
    , ingredients_id SMALLINT REFERENCES ingredient_names(id)
    , instructions_id SMALLINT REFERENCES recipe_instructions(id)
);
