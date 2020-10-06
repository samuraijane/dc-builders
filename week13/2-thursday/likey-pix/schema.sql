CREATE TABLE users (
    id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null
);

CREATE TABLE posts (
    id serial primary key,
    url text not null,
    user_id integer references users (id) on delete cascade
);

CREATE TABLE tags (
    id serial primary key,
    tag varchar(50) not null
);

CREATE TABLE tags_posts (
    tag_id integer references tags (id) on delete cascade,
    post_id integer references posts (id) on delete cascade
);

CREATE TABLE likes (
    user_id integer references users (id) on delete cascade,
    post_id integer references posts (id) on delete cascade
);

CREATE TABLE comments (
	id serial primary key,
    comment text not null,
    created_at timestamp default now(),
    post_id integer references posts (id) on delete cascade,
    user_id integer references users (id) on delete cascade
);