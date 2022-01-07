---
sidebar_position: 3
id: 'cloudcost'
---

# Cloud Cost

Cloud Cost is based on [Microsoft's Cloud Monitoring Dataset](https://github.com/microsoft/cloud-monitoring-dataset). This is a set of real-world time series derived from Microsoft service and client telemetry signals. It is used for development, evaluation and improvement of anomaly detection algorithms in Microsoft's cloud monitoring tools. We extrapolated this data to 2021 to provide live testing for analytics. 

## Accessing the data

The table for this dataset is `cloud_cost`. Visit our [Accessing the Data](/docs/Public_Datasets_Catalog/access_data) page to get the appropriate database or data warehouse credentials.

## Data schema

Cloud Cost dataset has the following structure:

- date: datetime column
- region
- service
- cloud_cost: ideal metric column

This is a highly granular data and would be suitable for testing hourly anomaly detection. 

## Acknowledgement

We thank [Microsoft Open Source](https://opensource.microsoft.com/) for providing the base dataset. 