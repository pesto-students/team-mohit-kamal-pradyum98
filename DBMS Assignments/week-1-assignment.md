### Normalization of Tables

#### Question 1: Normalizing the Bookstore Database Table

**1. First Normal Form (1NF)**
- 

**2. Second Normal Form (2NF)**
- **Primary Key:** `Book ID`
- **Normalization:**
  - **Table 1: Books**
    - Columns: Book ID, Title, Author ID, Genre ID, ISBN, Price
  - **Table 2: Publishers**
    - Columns: Publisher, Book ID (as a foreign key)
  - **Table 3: Genres**
    - Columns: Genre ID, Genre (e.g., Fiction, Science)

**3. Third Normal Form (3NF)**
- **Normalization:**
  - **Table 4: Authors**
    - Columns: Author, Book ID (as a foreign key)
  - The `Genre` attribute is now fully normalized, stored separately in the "Genres" table and referenced in the "Books" table via the Genre ID.

### Detailed Answers to Database Questions

#### Question 3: Primary Keys and Foreign Keys in a Relational Database

- **Primary Keys:**
  - **Definition:** A primary key is a unique identifier for each record in a table. It ensures that each record can be uniquely identified.
  - **Purpose:** It is used to maintain data integrity and to uniquely identify rows in a table.
  - **Characteristics:** 
    - Cannot be null.
    - Must be unique within the table.
    - Often an integer, but can be other data types.

- **Foreign Keys:**
  - **Definition:** A foreign key is a field (or collection of fields) in one table, that refers to the primary key in another table.
  - **Purpose:** 
    - Establishes a link between the data in two tables.
    - Used to enforce referential integrity.
  - **Functionality:** 
    - Ensures that the row of information in Table A corresponds to the correct row of information in Table B.
    - Prevents invalid data from being inserted into the foreign key column.

- **Establishing Relationships:**
  - Foreign keys create a "parent-child" relationship between tables.
  - This relationship ensures that records in the child table correspond to records in the parent table.

#### Question 4: ACID Properties in Database Transactions

- **Atomicity:**
  - Ensures that all operations within a database transaction are completed successfully.
  - If any part of the transaction fails, the entire transaction fails and the database state is left unchanged.

- **Consistency:**
  - Ensures that a transaction brings the database from one valid state to another.
  - Maintains database constraints, like unique keys, foreign keys, and check constraints.

- **Isolation:**
  - Transactions are performed in isolation from each other.
  - Prevents transactions from interfering with each other and ensures that concurrent transactions result in a state that would be obtained if transactions were executed serially.

- **Durability:**
  - Once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors.
  - Ensures that the completed transactions are permanently recorded in the database.

#### Question 5: Concept of Indexing in a Database

- **Indexing:**
  - An index in a database is similar to an index in a book.
  - It's a data structure that improves the speed of data retrieval operations on a database table.

- **Improving Query Performance:**
  - By using an index, the database doesn’t have to scan every row in a table to find rows needed to satisfy a query.
  - Significantly reduces the amount of data that needs to be examined.
  - Increases speed, especially for large tables.

#### Question 6: Concurrency Control and Deadlocks in Multi-user Database Environment

- **Concurrency Control:**
  - Manages simultaneous access or modification of database data.
  - Ensures data integrity and consistency despite concurrent changes.

- **Deadlocks:**
  - Occur when two or more transactions are waiting for each other to release locks.
  - Each transaction is waiting for a resource that the other transactions are holding.
  - Requires deadlock detection and resolution strategies.

#### Question 7: Database Sharding

- **Concept:**
  - Database sharding involves dividing a larger database into smaller, more manageable pieces, known as shards.
  - Each shard is a distinct database, and collectively, these shards make up the entire database.

- **Real-Time Examples:**
  - **Social Media Platforms:**
    - Use sharding to manage the data of billions of users efficiently.
    - Each shard can contain data for a specific set of users.
  - **E-Commerce Websites:**
    - Handle extensive product catalogues and high transaction volumes.
    - Sharding allows distributing the load and scaling horizontally.

- **Why and How Used:**
  - **Why:** 
    - To improve performance and manageability.
    - To scale horizontally and handle large datasets and high transaction volumes.
  - **How:** 
    - Data is partitioned based on a shard key.
    - Sharding strategies can be range-based, hash-based, or based on specific criteria.
