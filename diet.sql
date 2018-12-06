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

INSERT INTO recipes(name, recipe_instructions) VALUES ('Cereal', 'Pour the cereal into a bowl and then add milk.');
INSERT INTO ingredients(ingredients) VALUES ('Water');
INSERT INTO recipes(name, recipe_instructions) VALUES ('Water and Ice', 'Put ice cubes inside a cup and then slowly add water inside until glass is full.');