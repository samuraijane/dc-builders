create table users (
    id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null
);

create table posts (
    id serial primary key,
    url text not null,
    user_id integer references users (id)
);

create table tags (
    id serial primary key,
    tag varchar(50) not null
);

create table tags_posts (
    tag_id integer references tags (id),
    post_id integer references posts (id)
);