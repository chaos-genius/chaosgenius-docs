---
sidebar_position: 2
id: 'Postgres'
---

# Postgres

To connect a Postgres database as a data source, you will need the following information:

* **Username**: Username of user with access to database.
* **Password**: Password of the user.
* **Database Name**: Name of the database to connect to.
* **Database Host**:
    * For Localhost: localhost or 127.0.0.1
    * For External DB: The public IP of the server 
* **Port**: Default is 5432.

<img alt="Options For Postges" src="/img/connecting-to-data-sources/postgres.png" width="500" />


### Generating a new read-only user (Optional but recommended)

It is recommended that you create a new user with read-only access. If you feel that this step is not necessary, feel free to use one of your existing users.

To create a new dedicated user, run the following commands within your database:
```sql
CREATE USER chaos_genius PASSWORD 'put_password_here';
```
Give the user access to the schema where the data resides:
```sql
# Commands assume data is on the 'public' schema. 
GRANT USAGE ON SCHEMA public TO chaos_genius;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO chaos_genius;
```
