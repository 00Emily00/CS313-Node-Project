CREATE TABLE login (
    id SERIAL PRIMARY KEY NOT NULL
    , username VARCHAR(255) UNIQUE NOT NULL
    , password VARCHAR(255) NOT NULL
);
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

CREATE USER loginUser WITH PASSWORD 'user';
GRANT SELECT, INSERT, UPDATE ON login TO loginUser;
GRANT USAGE, SELECT ON SEQUENCE login_id_seq TO loginUser;
