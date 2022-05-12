---
sidebar_position: 1
id: 'add_data-source'
---

# Add Data Source

Chaos Genius supports multiple data sources. Please find a complete list of data sources & setup instructions for each data source in the section [Data Sources Catalog](/Data_Sources_Catalog/postgres.md)

If you do not find the data source you are looking to add, please drop us a line on our Community Slack channel. 

For third-party data sources such as `Google Sheets`, `Google Analytics`, `Shopify`, `Stripe`, `Bind Ads`, `Facebook Marketing` and `Google Ads`, Chaos Genius uses [Airbyte](https://docs.airbyte.io/) to load and sync data. For the said data sources, Chaos Genius follows the documentation support provided by Airbyte.

:::info

Third-party data sources are not available in the default version. If you need them, please [install the third-party version](/Quick_Start/install.md#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).

All third-party data sources are NOT enabled by default. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable specific third-party data sources.

:::

## Add a New Data Source
Within the Data Sources section, you can find a list of all the Data Sources that have been added along with the Status, Data Source Type, Number of KPIs currently defined using the particular data source, Last sync time and the date of creation.

![New Data Source](/img/connecting-to-data-sources/data_source_listing.png)

For adding a new Data Source, click on the "New Data Source" button on top right. You are required to follow the following steps:

-   Name the Data Source

-   Choose your Data Source's time zone. By default this value is set to UTC.

-   Select the Data Source type from the drop down

-   Fill in the required credentials

![Add Data Source](/img/connecting-to-data-sources/add_data_source.png)

The credential information varies by each Data Source type. Once you've filled in the credentials, you are required to test the connection by pressing "Test Connection".


If the connection is successfully tested, you can add the Data Source by pressing the "Add Data Source" button on the bottom that will replace the "Test Connection" button.

## Metadata sync

![Screenshot of a pop-up modal with the title "Data Source Added Successfully" and a line of text below it saying "Please wait for a few minutes for data sync to complete before adding a KPI".](/img/connecting-to-data-sources/metadata-sync-popup.png)

Metadata here refers to all the schemas, tables and columns present in a data source. This data is used to help you add a KPI. When a new data source is added, and every day hence, the metadata of the data source is cached inside Chaos Genius. The time at which metadata is synchronized daily can be [set globally](/Operator_Guides/Configuration/config-params.md#general-parameters).

### Metadata sync status

![Screenshot showing three data sources — "Redshift", "Live" and "Public". The fourth column in the data source list displays the metadata status. The statuses for the three data sources in order are — "In Progress", "Live" and "Broken".](/img/connecting-to-data-sources/metadata-statuses.png)

The metadata will be in one of three states:
- **In Progress**: synchronization is underway. For large data warehouses, the synchronization can take anywhere from a few seconds to 1 or 2 minutes.
- **Live** (a.k.a. "Completed"): synchronization is complete and KPIs can be added if not already.
- **Broken** (a.k.a. "Error"): synchronization could not complete due to an error. Please check the logs of the `chaosgenius-worker-alerts` service for details on the error.

### Force update metadata

If the metadata is out of date, you can trigger an update by clicking on the 3 dots menu and selecting "Sync schema". The metadata update runs as a background job.

![Screenshot showing two data sources — "Live" and "Public". The three dots menu is open on the second data source showing four options — "Set Alerts", "Sync Schema", "Edit", "Delete".](/img/connecting-to-data-sources/metadata-sync-button.png).
