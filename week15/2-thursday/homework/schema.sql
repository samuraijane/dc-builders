CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    productid INTEGER NOT NULL,
    product_quantity INTEGER,
    product_description varchar(50),
    payment_type varchar(50),
    customer_name varchar(50),
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name varchar(50),
    createdAt DATE,
    updatedAt DATE
)


