---
sidebar_position: 1
id: 'Config Parameters'
---

# Config Parameters

Chaos Genius tries to make it easy to update the analytics parameters, hyperparameters as well as other configuration changes. Currently we have exposed the following configuration parameters. 

## Updating Parameters

Your analytics can be configured by modifying parameters in the .env file. After editing the file, restart Chaos Genius using:  

```bash
docker-compose stop

docker-compose up
```

### Anomaly Detection Parameters

`MULTIDIM_ANALYSIS_FOR_ANOMALY (default=False)`

Enables the generation of multi-dimensional subgroups. For example, if we have 2 dimensions like `Country` and `Day of Week`, with this disabled we get subgroups like `Country = India`, `Day of Week = Monday` etc, but enabling this gives us subgroups like `Country = India and Day of Week = Monday`, `Country = US and Day of Week = Monday` etc.

`MAX_SUBDIM_CARDINALITY (default=100)`

Sets the maximum number of unique values allowed in a dimension. If a dimension exceeds this, it will not be considered during the analysis. If you have dimensions with high cardinalities, you can increase this value.

`TOP_DIMENSIONS_FOR_ANOMALY_DRILLDOWN (default=10)`

Sets the maximum number of sub-dimensions shown in the Anomaly Drill Downs. Increase this value to show more sub-dimensions in the UI.

`MIN_DATA_IN_SUBGROUP (default=30)`

We look at subgroups which are statistically significant in different ways. One of the ways we do this is by checking the minimum population in a subgroup. If you are dealing with sparse or small data, you should decrease this number. And if you want to ignore smaller populations, you can increase this value.

`MAX_FILTER_SUBGROUPS_ANOMALY (default=100)`

Sets the maximum number of subgroups considered for Anomaly Detection. To consider more subgroups for analysis, you can increase this value. But increase this will lead to longer computation time.

`MAX_ANOMALY_SLACK_DAYS (default=14)`

Sets the maximum number of days for which we can have no data and still consider the KPI for Anomaly Detection. You can increase this value if you expect to have large periods of missing data or have consistently sparse data.

### DeepDrills Parameters

`MAX_DEEPDRILLS_SLACK_DAYS (default=14)`

Sets the maximum number of days for which we can have no data and still consider the KPI for DeepDrills. You can increase this value if you expect to have large periods of missing data or have consistently sparse data.

`MAX_ROWS_FOR_DEEPDRILLS (default=10000000)`

Sets the maximum number of rows allowed in a KPI for it to be added. You can increase this if you have a very large dataset. But using large datasets will increase the computation time as well as the RAM required.

### Analytics Parameters

#### Posthog

Posthog Telemetry is enabled by default. It can be disabled by setting the following in the `.env` file:

```
REACT_APP_DISABLE_TELEMETRY=true
```

#### Sentry

Error collection using sentry is disabled by default. See [Sentry logging](/Troubleshooting/sentry_logging.md) for instructions to enable it.
