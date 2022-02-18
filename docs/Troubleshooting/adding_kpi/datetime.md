---
sidebar_position: 2
id: 'datetime_column'
---

# Supported Datetime Formats

Currently we have support for timestamp formats given by Postgres, Redshift, Snowflake and BigQuery. This includes:
- Date (YYYY-MM-DD)
- Timestamp without timezone (YYYY-MM-DD HH:MM:SS)

We don’t support:
- String Format Datetime
- Timezone Aware Datetime
    - Datetime Column has One Time Zone
    - Datetime Column has Multiple Time Zones

# Handling Timezone Aware and String Format Datetimes on various Data Sources:
## Snowflake
### String Format Datetime

Use the function `TO_TIMESTAMP_NTZ(<column name> [, <format>])` to cast your string to datetimeformat. Add the format of your string if your datetime string is in a non-standard format.

Reference Links:
- https://docs.snowflake.com/en/sql-reference/functions/to_timestamp.ht
- https://docs.snowflake.com/en/sql-reference/functions-conversion.html#date-and-time-formats-in-conversion-functions
- https://docs.snowflake.com/en/sql-reference/data-types-datetime.html

Example Query:
- For standard string formats (YYYY-MM-DD) :
    ```
    SELECT TO_TIMESTAMP_NTZ(string_date_col) AS datetime_col, * FROM "database_name"."schema_name"."table_name"
    ```
- For non-standard string formats, for example if the strings are in the format  “DD-MM-YY HH:MI:SS”
    ```
    SELECT TO_TIMESTAMP_NTZ(string_date_col, 'dd-mm-yyyy hh:mi:ss') AS datetime_col, * FROM "database_name"."schema_name"."table_name"
    ```

### Timezone Aware Datetime
#### Datetime Column has One Time Zone

Use the cast function `CAST(<column_name> AS TIMESTAMP_NTZ)` to cast to timestamp without timezone format. 

Example Query:
```
SELECT CAST(tz_aware_datetime_col AS TIMESTAMP_NTZ) AS datetime_col, * FROM "database_name"."schema_name"."table_name"
```

#### Datetime Column has Multiple Time Zones

If you have multiple time zones, you’ll need to convert all datetimes to a single timezone and then use the cast function as mentioned above. To convert to a single time zone use `CONVERT_TIMEZONE(<target_tz> , <column_name>)`  to convert them to a single timezone.

Reference Links:
- https://docs.snowflake.com/en/sql-reference/functions/convert_timezone.html

Example Query:
```
SELECT CAST(CONVERT_TIMEZONE('America/Los_Angeles', multiple_tz_datetime_col) AS TIMESTAMP_NTZ) AS datetime_col, * FROM "database_name"."schema_name"."table_name"
```

## Google BigQuery
### String Format Datetime

Use the CAST function when the string is in the format YYYY:MM:DD,  `CAST(<column name> as DATETIME)`. If your datetime string is in a non-standard format and casting is not returning a correct value, use PARSE_DATETIME, `PARSE_DATETIME(<format>, <column_name>)`.

Reference Links:
- https://support.google.com/datastudio/answer/9739558?hl=en

Example Query:
- For standard string formats (YYYY-MM-DD): 
    ```
    SELECT CAST(string_date_col AS DATETIME) AS datetime_col, * FROM table_name
    ```
 - For non-standard string formats, for example if the strings are in the format  “DD-MM-YY”:
    ```
    SELECT PARSE_DATETIME(“%d-%m-%Y”, string_date_col) AS datetime_col, * FROM table_name
    ```

### Timezone Aware Datetime

#### Datetime Column has One Time Zone
Use the EXTRACT function to retrieve the datetime part from your timezone aware data: `EXTRACT(DATETIME FROM <column_name> [AT TIME ZONE timezone])`

Reference Links:
- https://cloud.google.com/bigquery/docs/reference/standard-sql/timestamp_functions#extract

Example Query:
```
SELECT EXTRACT(DATETIME FROM tz_aware_datetime_col) AS datetime_col, * FROM table_name
```

#### Datetime Column has Multiple Time Zones
If you have multiple time zones, you’ll need to convert all datetimes to a single timezone and then use the cast function as mentioned above. To convert to a single time zone use `<date_column> AT TIME ZONE timezone` to convert everything to the same time zone. 

Example Query:
```
SELECT EXTRACT(DATETIME FROM multiple_tz_datetime_col AT TIME ZONE "America/Los_Angeles"), * FROM table_name
```

## Postgres and Redshift

### String Format Datetime
Use the CAST function when the string is in the format YYYY:MM:DD, `CAST(<column name> as TIMESTAMP)`. If your datetime string is in a non-standard format and casting is not returning a correct value, use TO_TIMESTAMP, `TO_TIMESTAMP(<column_name>, <format>)`. TO_TIMESTAMP returns a Time Zone Aware string so you will need to remove its timezone info as mentioned below.

Reference Links:
- https://www.postgresql.org/docs/10/functions-formatting.html

Example Query:
- For standard string formats (YYYY-MM-DD): 
    ```
    SELECT CAST(string_date_col AS TIMESTAMP) AS datetime_col, * FROM table_name
    ```
- For non-standard string formats, for example if the strings are in the format  “DD-MM-YY”:
    ```
    SELECT CAST(TO_TIMESTAMP(string_date_col, 'dd-mm-yyyy') AS TIMESTAMP WITHOUT TIME ZONE) AS datetime_col, * FROM table_name
    ```

### Timezone Aware Datetime

#### Datetime Column has One Time Zone
Use the cast function `CAST(<column_name> AS TIMESTAMP WITHOUT TIME ZONE)` to cast to timestamp without timezone format. 

Example Query:
```
SELECT CAST(tz_aware_datetime_col AS TIMESTAMP WITHOUT TIME ZONE) AS datetime_col, * FROM table_name
```

#### Datetime Column has Multiple Time Zones
If you have multiple time zones, you’ll need to convert all datetimes to a single timezone and then use the cast function as mentioned above. To convert to a single time zone use `<date_column> AT TIME ZONE timezone`  to convert them to a single timezone

Example Query:
```
SELECT CAST(multiple_tz_datetime_col AT TIME ZONE ‘PST’ AS TIMESTAMP WITHOUT TIME ZONE) AS datetime_col, * FROM table_name
```
