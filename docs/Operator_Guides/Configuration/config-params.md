---
sidebar_position: 1
id: 'Config Parameters'
---

# Config Parameters

Chaos Genius tries to make it easy to update various analytics parameters as well as other configuration changes. Currently we have exposed the following configuration parameters.

## Updating Parameters

Chaos Genius can be configured by modifying parameters in the `.env` file. After editing the file, restart Chaos Genius using these commands for the default version:

```
docker-compose stop

docker-compose up
```

:::info

If you're using the third-party version, use these commands instead:

```
docker-compose -f docker-compose.thirdparty.yml stop

docker-compose -f docker-compose.thirdparty.yml up
```
:::

## Required Parameters

These parameters must be set for a fully working Chaos Genius installation.

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `CHAOSGENIUS_WEBAPP_URL` | string | | URL of the Chaos Genius deployment. Usually, this will be `http://<ip-address-or-hostname>:8080/` (`http://localhost:8080/` in local installations). This will be the URL prefix used in email and slack alerts when linking to KPIs and the Alerts Dashboard. |

## General Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **DAYS_OFFSET_FOR_ANALTYICS** | integer | 2 | Sets the days offset from the current date till which your KPI's will run for. By default, the analysis will be performed up until 2 days before the current date. For example, if your KPI runs on February 13th, your analytics will display results until February 11th. We don't recommend decreasing this value as it might lead to incomplete data being used for analysis. |
| **HOURS_OFFSET_FOR_ANALTYICS** | integer | 0 | Sets the hours offset from the latest data point till which Anomaly Detection will run for your KPI. This variable is only utilized if Anomaly Model Frequency is set to Hourly. By default, the analysis will be performed till the most recent data. For example, if your KPI has data until 4 PM, Anomaly detection will run until 3 PM. |
| **TIMEZONE** | string | UTC | This sets the timezone on which all your analytics are reported. Must be one of the [supported timezones](./supported-timezones.md). |
| **MAX_ROWS_FOR_DEEPDRILLS** | integer | 10000000 | Sets the maximum number of rows allowed for a KPI to be added. You can increase this value if you have a very large dataset. Using large datasets will increase the computation time as well as the RAM required. |
| **METADATA_SYNC_TIME**| string | `03:00` | The time (in server timezone) at which [data source metadata](../../Data_Sources/add_data-source.md#metadata-sync) is synchronized daily. |

## DeepDrills Parameters

| Name | Type | Default | Description | 
| --- | --- | --- | --- |   
| **MAX_DEEPDRILLS_SLACK_DAYS** | integer | 14 | Sets the maximum number of days for which we can have no data and still consider the KPI for DeepDrills. You can increase this value if you expect to have large periods of missing data or have consistently sparse data. |
| **DEEPDRILLS_HTABLE_MAX_PARENTS** | integer | 5 | Sets the maximum number of rows in the first level of the DeepDrills' drilldowns. |
| **DEEPDRILLS_HTABLE_MAX_CHILDREN** | integer | 5 | Sets the maximum number of rows in the subsequent levels of the DeepDrills' drilldowns. |
| **DEEPDRILLS_HTABLE_MAX_DEPTH** | integer | 3 | Sets the maximum depth of the drilldowns in DeepDrills. |
| **DEEPDRILLS_ENABLED_TIME_RANGES** | string | <span style={{overflowWrap: "anywhere"}}>last_30_days, last_7_days, previous_day, month_on_month, month_to_date, week_on_week, week_to_date</span> | Sets the enabled time ranges for which DeepDrills is computed as comma separated values. |

## Anomaly Detection Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| **MULTIDIM_ANALYSIS_FOR_ANOMALY** | boolean | false | Enables the generation of multi-dimensional subgroups. For example, if we have 2 dimensions like `Country` and `Day of Week`, with this disabled we get subgroups like `Country = India`, `Day of Week = Monday` etc, but enabling this gives us subgroups like `Country = India and Day of Week = Monday`, `Country = US and Day of Week = Monday` etc. |
| **MAX_SUBDIM_CARDINALITY** | integer | 1000 | Sets the maximum number of unique values allowed in a dimension. If a dimension exceeds this, it will not be considered during the analysis. If you have dimensions with high cardinalities, you can increase this value. |
| <span style={{overflowWrap: "anywhere"}}>**TOP_DIMENSIONS_FOR_ANOMALY_DRILLDOWN**</span> | integer | 10 | Sets the maximum number of dimensions shown in the Anomaly Drill Downs. Increase this value to show more dimensions in the UI. |
| **MIN_DATA_IN_SUBGROUP** | integer | 30 | We look at subgroups which are statistically significant in different ways. One of the ways we do this is by checking the minimum population in a subgroup. If you are dealing with sparse or small data, you should decrease this number. And if you want to ignore smaller populations, you can increase this value. |
| **TOP_SUBDIMENSIONS_FOR_ANOMALY** | integer | 10 |  Sets the maximum number of sud-dimensions shown in the Anomaly Sub-dimensions page. Increase this value to show more dimensions in the UI. |
| **MAX_FILTER_SUBGROUPS_ANOMALY** | integer | 100 | Sets the maximum number of subgroups considered for Anomaly Detection. To consider more subgroups for analysis, you can increase this value. But increasing this will lead to longer computation time. |
| **MAX_ANOMALY_SLACK_DAYS** | integer | 14 | Sets the maximum number of days for which we can have no data and still consider the KPI for Anomaly Detection. You can increase this value if you expect to have large periods of missing data or have consistently sparse data. |

## Enabling third-party Data Sources

:::info

Enabling these data sources requires the third-party version. Please [install the third-party version](/docs/Quick_Start/Install-Chaos-Genius#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).

:::

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `SOURCE_GOOGLE_ANALYTICS` | bool | `true` | [Google Analytics](/Data_Sources_Catalog/google-analytics.md) data source |
| `SOURCE_GOOGLE_SHEETS` | bool | `true` | [Google Sheets](/Data_Sources_Catalog/google-sheets.md) data source |
| `SOURCE_SHOPIFY` | bool | `false` | [Shopify](/Data_Sources_Catalog/shopify.md) data source |
| `SOURCE_STRIPE` | bool | `false` | [Stripe](/Data_Sources_Catalog/stripe.md) data source |
| `SOURCE_GOOGLE_ADS` | bool | `false` | [Google Ads](/Data_Sources_Catalog/googleads.md) data source |
| `SOURCE_FACEBOOK_ADS` | bool | `false` | [Facebook Marketing](/Data_Sources_Catalog/fbmarketing.md) data source |
| `SOURCE_BING_ADS` | bool | `false` | [Bind Ads](/Data_Sources_Catalog/bingads.md) data source |

