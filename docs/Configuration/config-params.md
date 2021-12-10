---
sidebar_position: 1
id: 'Config Parameters'
---

# Config Parameters

Chaos Genius tries to make it easy to update the analytics parameters, hyperparameters as well as other configuration changes. Currently we have exposed the following configuration parameters. 

## Updating Parameters

Your analytics can be configured by modifying parameters in the .env file. After editing the file, restart Chaos Genius using:  

docker-compose stop

docker-compose up

### Anomaly Detection Parameters

#### MULTIDIM\_ANALYSIS\_FOR\_ANOMALY (default=False)

Enables the generation of multi-dimensional subgroups. For example, if we have 2 dimensions like Country and Day of Week, with this disabled we get subgroups like Country = India, Day of Week = Monday etc, but enabling this gives us subgroups like Country = India and Day of Week = Monday, Country = US and Day of Week = Monday etc.

#### MAX\_SUBDIM\_CARDINALITY (default=100)

Sets the maximum number of unique values allowed in a dimension. If a dimension exceeds this, it will not be considered during the analysis.

#### TOP\_DIMENSIONS\_FOR\_ANOMALY\_DRILLDOWN (default=10)

Sets the maximum number of sub-dimensions shown in the Anomaly Drill Downs.

#### MIN\_DATA\_IN\_SUBGROUP (default=30)

Sets the minimum number of data points required to be in a subgroup for it to be considered for Anomaly Detection.

#### MAX\_FILTER\_SUBGROUPS\_ANOMALY (default=100)

Sets the maximum number of subgroups considered for Anomaly Detection.

#### MAX\_ANOMALY\_SLACK\_DAYS (default=14)

Sets the maximum number of days for which we can have no data and still consider the KPI for Anomaly Detection.

### DeepDrills Parameters

#### MAX\_DEEPDRILLS\_SLACK\_DAYS (default=14)

Sets the maximum number of days for which we can have no data and still consider the KPI for DeepDrills

#### MAX\_ROWS\_FOR\_DEEPDRILLS (default=10000000)

Sets the maximum number of rows allowed in a KPI for it to be added.  

### Analytics Parameters

Posthog Telemetry is enabled by default. It can be disabled by setting the following in the .env file:  

REACT\_APP\_DISABLE\_TELEMETRY=true  

Error collection using sentry is disabled by default. See <<Add link to Troubleshooting-\>Sentry\>\> for instructions to enable it.  

SENTRY\_DSN=""
