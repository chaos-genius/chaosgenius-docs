---
sidebar_position: 1
id: 'add_data-source'
---

# Add Data Source

Chaos Genius supports multiple data sources including Databases, Datawarehouses and multiple 3rd party connectors. 

Please find a complete list of data sources & setup instructions for each data source in our [Data Sources Catalog](https://docs.google.com/document/d/1y568-aky5EXbR3RhA1kho4kqpxcHifcDJfk6ft5nRC8/edit#heading=h.cab7me28s6p6) section.

If you do not find the data source you are looking to add, please drop us a line on our Community Slack channel. 

For a few of the data sources, Chaos Genius uses [Airbyte](https://docs.airbyte.io/) to load and sync data. For the said data sources, Chaos Genius follows the documentation support provided by Airbyte.

Within the Data Sources section, you can find a list of all the Data sources that have been added along with the Status, Data Source Type, Number of KPIs currently defined using the particular data source, Last sync time and the date of creation.

For adding a new Data Source, click on the "New Data Source" button on top right. You are required to follow the following steps:

-   Name the data source

-   Select the data source type from the drop down

-   Fill in the required credentials

The credential information varies by each Data Source type. Once you've filled in the credentials, you are required to test the connection by pressing "Test Connection".

If the connection is successfully tested, you can add the Data Source by pressing the "Add Data Source" button on the bottom.
