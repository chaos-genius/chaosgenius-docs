---
sidebar_position: 2
id: 'mysql'
---

# MySQL

To connect a MySQL database as a data source, you will need the following information:

* **Username**: Username of user with access to database.
* **Password**: Password of the user.
* **Database Name**: Name of the database to connect to.
* **Database Host**:
    * For Localhost: localhost or 127.0.0.1
    * For External DB: The public IP of the server 
* **Port**: Default is 3306.
* **Replication Method**:
    * Standard
        * Connect to the database and gains access to its contents.
    * CDC
        * Does what Standard does, but also logs any DELETE / UPDATE / INSERT changes done to the data source.
* **JDBC URL Parameters (Optional)**:
    * Additional parameters to pass to the JDBC URL String when connecting to the database.
        * Should be stored as 'key=value' pairs and separated by the '&' symbol. <br/>
        (i.e key1=value1&key2=value2&key3=value3)

<img alt="Options For MySQL" src="/img/connecting-to-data-sources/mysql.png" width="500" />


## Generating a new read-only user (Optional but recommended)

It is recommended that you create a new user with read-only access. If you feel that this step is not necessary, feel free to use one of your existing users.

To create a new dedicated user, run the following commands within your database:
```sql
CREATE USER 'chaos_genius'@'%' IDENTIFIED BY 'put_password_here';
```
Give the user access to the database that will be imported to Chaos Genius. Different sets of permissions are needed depending on the replication method used.

**For STANDARD:**
```sql
GRANT SELECT ON <database_name>.* TO 'chaos_genius'@'%';
```
**For CDC:**
```sql
GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'chaos_genius'@'%';
```
