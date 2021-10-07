---
sidebar_position: 1
id: 'add_data-source'
---

# Add Data Source

Chaos Genius supports multiple data sources including Databases, Datawarehouses and multiple 3rd party connectors. 

Please find a complete list of data sources & setup instructions for each data source in our [Data Sources Catalog](https://docs-staging.chaosgenius.io/docs/Data_Sources_Catalog/postgres) section.

If you do not find the data source you are looking to add, please drop us a line on our Community Slack channel. 

For a few of the data sources, Chaos Genius uses [Airbyte](https://docs.airbyte.io/) to load and sync data. For the said data sources, Chaos Genius follows the documentation support provided by Airbyte.

## Add a New Data Source
Within the Data Sources section, you can find a list of all the Data sources that have been added along with the Status, Data Source Type, Number of KPIs currently defined using the particular data source, Last sync time and the date of creation.

![New Data Source](/img/connecting-to-data-sources/data_source_listing.png)

For adding a new Data Source, click on the "New Data Source" button on top right. You are required to follow the following steps:

-   Name the Data Source

-   Select the Data Source type from the drop down

-   Fill in the required credentials

![Add Data Source](/img/connecting-to-data-sources/add_data_source.png)

The credential information varies by each Data Source type. Once you've filled in the credentials, you are required to test the connection by pressing "Test Connection".


If the connection is successfully tested, you can add the Data Source by pressing the "Add Data Source" button on the bottom.

![Test Connection](/img/connecting-to-data-sources/test_connection.png)
