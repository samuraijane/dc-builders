## Create ACME Clothing Database

1. psql
1. CREATE DATABASE acme_clothing_db;
1. \c acme_clothing_db

## Create Shoes table

1. CREATE TABLE shoes (personal_branding_name varchar, price numeric(4, 2), date_available date, size integer DEFAULT 8 CHECK (size >=8))

## Creat Socks table

1.  CREATE TABLE socks (personal_branding_name varchar, price numeric(4, 2), date_available date, material varchar)

## Insert value into shoes table

1. insert into shoes values
   ('Always on Time', 99.99, '2020-10-01', 15);
1. insert into shoes values
   ('Patriot', 119.99, '2020-10-01', 15);
1. insert into shoes values
   ('The Tax Slayer', 89.99, '2020-10-01', 15);

## Insert value into socks table

1.insert into socks values
('My Favorite Ex', 9.99, '2020-10-01', cotton);
1.insert into socks values
('Retro the Billy Goat', 19.99, '2020-10-01', polyester);
1.insert into socks values
('Egyptian Wannabee', 12.99, '2020-10-01', nylon);
