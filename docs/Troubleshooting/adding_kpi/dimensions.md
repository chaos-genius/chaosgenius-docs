---
sidebar_position: 3
id: 'dimensions'
---

# Handling Dimensions

<p></p>

## Using a numerical column as dimension

Numerical columns are supported by DeepDrills via binning. Currently, Anomaly does not accept numerical columns as dimensions. If you've added a numerical column, Anomaly will disregard that column during its calculations.

If you have a numerical column, for example Country Code or Stock ID that needs to be treated as a categorical variable, please use the CAST function to convert them into string format.

Examply Queries: 
- For Google BigQuery:
    ```
    SELECT CAST(<column_name> AS STRING) AS casted_column, *  FROM table_name
    ```
- For Snowflake, Redshift, Postgres:
    ```
    SELECT CAST(<column_name> AS TEXT) AS casted_column, *  FROM table_name
    ```

## Using a high cardinality column as dimension

If your dimension column has cardinality greater than 1000, you can change it's value in your `.env` file. For more information on this please refer to the [Config Parameters Section](/Operator_Guides/Configuration/config-params.md).