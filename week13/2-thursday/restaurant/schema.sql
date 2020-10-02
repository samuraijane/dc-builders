CREATE TABLE restaurants (
    id serial primary key,
    name varchar(50) not null,
    distance decimal,
    stars integer,
    food_type varchar(50),
    favorite_dish varchar(50),
    takeout boolean,
    last_visit timestamp
)