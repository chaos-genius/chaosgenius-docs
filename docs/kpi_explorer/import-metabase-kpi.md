---
sidebar_position: 
id: 'import-metabase-kpis'
---

# Importing Metabase KPIs

If you have been using Metabase to view your KPIs, especially if you have many, it may seem tedious moving them to Chaos Genius. Dont worry! We have a solution for that.

![Metabase Example Dashboard](/img/kpi-and-dashboard/metabase-dashboard.png)

This is an example Metabase dashboard that an Airline company may use to track certain aspects of their operations. Given this dashboard has over 15 KPIs, all of which the business would have spent time fine tuning, trying to reverse engineer these KPIs would be time consuming.

Just follow the steps below and you will have your Metabase KPIs imported to Chaos Genius in no time.

## Getting Metabase Application Database Credentials

Before any program can be run, you need to get the credentials for the database used to store all of Metabase's data. There are two different ways to do this, and it depends primarily on how you run Metabase.

### Using Metabase JAR
If you run Metabase using its JAR file, you specify the database you want it to use with something along the lines of:
```shell
export MB_DB_TYPE=postgres
export MB_DB_DBNAME=metabase
export MB_DB_PORT=5432
export MB_DB_USER=<username>
export MB_DB_PASS=<password>
export MB_DB_HOST=localhost
java -jar metabase.jar
```
OR
```shell
export MB_DB_CONNECTION_URI="postgres://localhost:5432/metabase?user=<username>&password=<password>"
java -jar metabase.jar
```
If you run Metabase JAR without specifying anything, it is likely using the default H2 database, which will not work for this solution.

### Using Metabase Docker
If you setup Metabase with Docker, you specified the database it should use with a command similar to:
```shell
docker run -d -p 3000:3000 \
  -e "MB_DB_TYPE=postgres" \
  -e "MB_DB_DBNAME=metabase" \
  -e "MB_DB_PORT=5432" \
  -e "MB_DB_USER=<username>" \
  -e "MB_DB_PASS=<password>" \
  -e "MB_DB_HOST=my-database-host" \
  --name metabase metabase/metabase
```
If you did not specify this information, and ran a command like:
```shell
docker run -d -p 3000:3000 --name metabase metabase/metabase
```
Then you are using the H2 database, which will not work for this solution.

With Docker, you only need to setup the container once, making it possible to forget which database you used. In this case, your best option is to check all your database servers for a database named `DATABASE NAME`.

## Generate JSON of KPIs

With the credentials to access the database that Metabase uses, we can now generate a JSON of all your KPIs.
```shell
TEMPORARY: Code to CD to where script is.
```
Now enable that virtual environment:
```shell
TEMPORARY: Code to enable VirtualENV.
```
Next, open the file `metabase_kpi_import.py` and you will find the following code:
```python
metabase_db_credentials = {
    "database_type": "<DB_TYPE>",
    "user": "<DB_USER>",
    "pass": "<DB_PASS>",
    "host": "<DB_HOST>",
    "port": "<DB_PORT>",
    "database": "<DB_DBNAME>"
}

"""
Valid inputs for the field 'database_type' are:
postgresql, mysql, mariadb, oracle, mssql, sqlite
"""
```
Replace all of the fields with the credentials you got from [the step above](#getting-metabase-application-database-credentials).
Now run the following command:
```shell
python3 metabase_kpi_import.py
```
Given the credentials you entered were valid, the code will not return any errors. Now you will have two new files called `mbql_questions.json` and `native_questions.json`.

## Importing KPIs
`mbql_questions.json` has all your Metabase [Table KPIs](adding-kpis#table-kpis) and `native_questions.json` has all your Metabase [Custom Query KPIs](adding-kpis#custom-query-kpis).

### Table KPIs
An example output for `mbql_questions.json` is:
```json
[{
    "id": 1,
    "name": "Tickets vs Book Date",
    "kpi_query": "bookings.tickets",
    "data_source": {
        "host": "192.168.99.100",
        "port": 5432,
        "dbname": "demo",
        "user": "postgres",
        "password": "password",
        "ssl": false,
        "additional-options": null,
        "tunnel-enabled": false
    },
    "datetime_column": null,
    "metric": [],
    "metric_precision": 2,
    "aggregation": "count",
    "filters": {},
    "dimensions": [
        "contact_data",
        "ticket_no",
        "book_ref",
        "passenger_id",
        "passenger_name"
    ]
},
{
    "id": 2,
    "name": "Distinct Aircraft Code",
    "kpi_query": "bookings.seats",
    "data_source": {
        "host": "192.168.99.100",
        "port": 5432,
        "dbname": "demo",
        "user": "postgres",
        "password": "password",
        "ssl": false,
        "additional-options": null,
        "tunnel-enabled": false
    },
    "datetime_column": null,
    "metric": "aircraft_code",
    "metric_precision": 2,
    "aggregation": "distinct",
    "filters": {},
    "dimensions": [
        "seat_no",
        "aircraft_code",
        "fare_conditions"
    ]
},
{
    "id": 3,
    "name": "Seats per Fare Conditions",
    "kpi_query": "bookings.seats",
    "data_source": {
        "host": "192.168.99.100",
        "port": 5432,
        "dbname": "demo",
        "user": "postgres",
        "password": "password",
        "ssl": false,
        "additional-options": null,
        "tunnel-enabled": false
    },
    "datetime_column": null,
    "metric": [],
    "metric_precision": 2,
    "aggregation": "count",
    "filters": {},
    "dimensions": [
        "seat_no",
        "aircraft_code",
        "fare_conditions"
    ]
}]
```

The next step is to go to and [add a KPI](adding-kpis#adding-a-kpi) for each of the KPIs listed. Since these are Table KPIs, `kpi-query` is the table name. Also, make sure that there is a data source already added which connects to the information provided by `data_source`.

If a field, such as `dimensions`, has multiple values, you can choose which one(s) to input into Chaos Genius. 

### Query KPIs
An example output for `native_questions.json` is:
```json
[{
    "name": "Number of seats in plane",
    "query": "SELECT \"source\".\"fare_conditions\" AS \"fare_conditions\", \"source\".\"count\" AS \"count\"\nFROM (SELECT \"bookings\".\"seats\".\"fare_conditions\" AS \"fare_conditions\", count(*) AS \"count\" FROM \"bookings\".\"seats\"\nGROUP BY \"bookings\".\"seats\".\"fare_conditions\"\nORDER BY \"count\" DESC, \"bookings\".\"seats\".\"fare_conditions\" ASC) \"source\"\nLIMIT 1048575",
    "data_source": {
        "host": "192.168.99.100",
        "port": 5432,
        "dbname": "demo",
        "user": "postgres",
        "password": "password",
        "ssl": false,
        "additional-options": null,
        "tunnel-enabled": false
    }
},
{
    "name": "Number of passengers per airport",
    "query": "SELECT count(flights.*), routes.arrival_airport_name  from flights, routes where flights.flight_no=routes.flight_no\nGROUP BY routes.arrival_airport_name",
    "data_source": {
        "host": "192.168.99.100",
        "port": 5432,
        "dbname": "demo",
        "user": "postgres",
        "password": "password",
        "ssl": false,
        "additional-options": null,
        "tunnel-enabled": false
    }
},
{
    "name": "Bookings per Week",
    "query": "SELECT \"source\".\"book_date\" AS \"book_date\", \"source\".\"sum\" AS \"sum\"\nFROM (SELECT (CAST(date_trunc('week', CAST((CAST(\"bookings\".\"bookings\".\"book_date\" AS timestamp) + (INTERVAL '1 day')) AS timestamp)) AS timestamp) + (INTERVAL '-1 day')) AS \"book_date\", sum(\"bookings\".\"bookings\".\"total_amount\") AS \"sum\" FROM \"bookings\".\"bookings\"\nGROUP BY (CAST(date_trunc('week', CAST((CAST(\"bookings\".\"bookings\".\"book_date\" AS timestamp) + (INTERVAL '1 day')) AS timestamp)) AS timestamp) + (INTERVAL '-1 day'))\nORDER BY (CAST(date_trunc('week', CAST((CAST(\"bookings\".\"bookings\".\"book_date\" AS timestamp) + (INTERVAL '1 day')) AS timestamp)) AS timestamp) + (INTERVAL '-1 day')) ASC) \"source\"\nLIMIT 1048575",
    "data_source": {
        "host": "192.168.99.100",
        "port": 5432,
        "dbname": "demo",
        "user": "postgres",
        "password": "password",
        "ssl": false,
        "additional-options": null,
        "tunnel-enabled": false
    }
}]
```

The next step is to go to and [add a KPI](adding-kpis#adding-a-kpi) for each of the KPIs listed. Since these are Custom Query KPIs, only the query is provided. However, after you input this data into the `Query` field on Chaos Genius, all of the KPI parameter fields will be populated with values for you to choose from. Also, make sure that there is a data source already added which connects to the information provided by `data_source`. 
