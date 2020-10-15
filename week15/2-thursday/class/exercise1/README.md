# Exercise 1: Adding a Checkout to DC Merch

People are interested in DC Merch, but they have no way to buy it! As the Senior Backend Developer, you're our only hope.

## Overview 

We need the following database pieces to be to create orders for our checkout.
1. An order Model, that contains a unique ID, a product ID, product quantity, some information about the customer and some information on the order (you choice on what these fields should be)
1. A CRUD API for orders
    1. When you GET an order ID, you also display the product information

## Details

Start with the class demo from Tuesday labeled `sqlz-basic` and copy it to a new folder. Clear the node models and run `npm install`.

### Order Model

**NOTE**: These steps are not a guide, just a general overview about how you should accomplishing the above task

It is assumed that there is only one product per order, although you can order multiple of the same object

1. Create a seed file so that you have some products to test; seed this into the database
1. Create a new model for Order using the Sequelize CLI
1. Modify the Model file to include the necessary fields and the associate with a Product Model.
1. Modify the migration file with any updates to the model in the aforementioned step.

### Order API

1. Create a new router for the order API. Use the existing `Product` router as a guide.
1. Make sure when you `GET` an individual order by ID, that you return the Product information along with the rest of the order data.

### Migrate the Product Schema

Our products are taking off but we can't find the right merch in the warehouse. Add a `UPC` field to the Product model WITHOUT deleting the existing data. You'll need to make a migration

1. Create a new migration use the Sequelize command line tool. 
1. Use the migration file to create a new column for UPC. You can leave it null for now.
1. Make changes to your seed file to include the new UPC field.
1. Make changes to your product API (as necessary) to accept the new field on create and return it where appropriate.
1. Run the migration and inspect the Products table to view the new column.

If you complete the assignment and would like a review, please submit a PR against the master branch and our DiR will review.

Checkout ID