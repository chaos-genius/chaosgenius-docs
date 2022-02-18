---
sidebar_position: 1
id: 'add_data-source'
---

# Add Data Source

Chaos Genius supports multiple data sources. Please find a complete list of data sources & setup instructions for each data source in the section [Data Sources Catalog](/Data_Sources_Catalog/postgres.md)

If you do not find the data source you are looking to add, please drop us a line on our Community Slack channel. 

For third-party data sources such as Google Sheets, Google Analytics, Shopify, Stripe, Bind Ads, Facebook Marketing and Google Ads; Chaos Genius uses [Airbyte](https://docs.airbyte.io/) to load and sync data. For the said data sources, Chaos Genius follows the documentation support provided by Airbyte.

:::info

Third-party data sources are not available in the default version. If you need them, please [install the third-party version](/Quick_Start/install.md#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).

All third-party data sources are NOT enabled by default. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable specific third-party data sources.

:::

## Add a New Data Source
Within the Data Sources section, you can find a list of all the Data Sources that have been added along with the Status, Data Source Type, Number of KPIs currently defined using the particular data source, Last sync time and the date of creation.

![New Data Source](/img/connecting-to-data-sources/data_source_listing.png)

For adding a new Data Source, click on the "New Data Source" button on top right. You are required to follow the following steps:

-   Name the Data Source

-   Select the Data Source type from the drop down

-   Fill in the required credentials

![Add Data Source](/img/connecting-to-data-sources/add_data_source.png)

The credential information varies by each Data Source type. Once you've filled in the credentials, you are required to test the connection by pressing "Test Connection".


If the connection is successfully tested, you can add the Data Source by pressing the "Add Data Source" button on the bottom.

![Test Connection](/img/connecting-to-data-sources/test_connection.png)
