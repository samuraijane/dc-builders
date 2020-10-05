INSERT INTO restaurants
    (Restaurant_Name, Distance, Stars, Catergory, Takeout_Available, Last_Visit)
VALUES
    ('Shoneys', 42.6, 5,'American', 'TRUE','2018-10-01 12:00:06'),
    ('Poor Calvins', 0.5, 4, 'Asian','TRUE', '2019-02-14 18:30:06'),
    ('Honey Pig', 25.7, 5, 'Korean','FALSE', '2017-03-23 22:00:06'),
    ('Big Pie in the Sky Pizzeria', 25.7, 5, 'Italian','FALSE', '2008-11-15 15:00:06'),
    ('Applebees', 11.7, 2, 'American','TRUE', '1975-12-20 19:45:06'),
    ('Top Spice', 10.2, 3, 'Thai','FALSE', '2007-07-06 13:22:06');


SELECT id, Takeout_Available, 
    CASE WHEN Takeout_Available = 'TRUE' THEN 'Yes' 
    ELSE 'No' 
    END AS Takeout_Available
FROM restaurants; 