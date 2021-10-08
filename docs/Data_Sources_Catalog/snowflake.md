---
sidebar_position: 4
id: 'snowflake'
---

# Snowflake

To connect Snowflake as a data source, you will need the following information:

-   **Account Name**: Account Identifier of the snowflake instance (must include the account and region). You can also find more info about the Account Identifier [here](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html). The format of the account should be ``<xxxxxxx>.<region-name>``. As an example aa00000.ap-south-1. 

-   **Username**: Username for logging into your Snowflake account.

-   **Password**: Password used for logging into your Snowflake account.

-   **Role**: Role used for connecting with your Snowflake account.

-   **Warehouse**: Warehouse name used for query processing.

-   **Database**: Name of the database.

-   **Schema**: Schema name inside the selected database.

Note: It is recommended to create a dedicated read-only user with access to the relevant schemas.

To get your connection information, log into your Snowflake Console. You can find your warehouse, database, schema and login credentials from your Snowflake console.
 
 ![Snowflake](/img/connecting-to-data-sources/snowflake.png)

