CREATE TABLE restaurants (
    id serial primary key,
    Restaurant_Name varchar(50) not null,
    Distance DECIMAL(10, 2),
    Stars INT not null
        check(Stars between 0 and 5),
    Catergory varchar(50) not null,
    Takeout_Available BOOLEAN not null,
    Last_Visit TIMESTAMP
);

create table reviews (
    id serial primary key,
    url text not null,
    user_id integer references restaurants (id) on delete cascade,
    average_review integer REFERENCES restaurants (Stars) on delete cascade 
);