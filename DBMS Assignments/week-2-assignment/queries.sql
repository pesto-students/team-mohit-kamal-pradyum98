-- Query 1: Find the item that has the minimum weight.
SELECT * FROM ITEMS ORDER BY WEIGHT ASC LIMIT 1;

-- Query 2: Find the different warehouses in "Pune".
SELECT * FROM WAREHOUSES WHERE LOCATION = 'Pune';

-- Query 3: Find the details of items ordered by a customer named "Mr. Patil".
SELECT ITEMS.* FROM ITEMS
JOIN ITEM_ORDERS ON ITEMS.ITEMNO = ITEM_ORDERS.ITEMNO
JOIN ORDERS ON ITEM_ORDERS.ONO = ORDERS.ONO
JOIN CUSTOMER ON ORDERS.CNO = CUSTOMER.CNO
WHERE CUSTOMER.CNAME = 'Mr. Patil';

-- Query 4: Find a Warehouse that has the maximum number of stores.
SELECT WID, COUNT(*) AS STORE_COUNT FROM STORES
GROUP BY WID
ORDER BY STORE_COUNT DESC
LIMIT 1;

-- Query 5: Find an item that is ordered for a minimum number of times.
SELECT ITEMNO, COUNT(*) AS ORDER_COUNT FROM ITEM_ORDERS
GROUP BY ITEMNO
ORDER BY ORDER_COUNT ASC
LIMIT 1;

-- Query 6: Find the detailed orders given by each customer.
SELECT CUSTOMER.CNO, CUSTOMER.CNAME, ORDERS.ONO, ORDERS.ODATE FROM CUSTOMER
JOIN ORDERS ON CUSTOMER.CNO = ORDERS.CNO;
