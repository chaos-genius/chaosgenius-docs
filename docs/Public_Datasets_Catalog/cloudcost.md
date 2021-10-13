---
sidebar_position: 3
id: 'cloudcost'
---

# Cloud Cost

Cloud Cost is based on [Mircsoft's Cloud Monitoring Dataset](https://github.com/microsoft/cloud-monitoring-dataset). This is a set of real-world time series derived from Microsoft service and client telemetry signals. It is used for development, evaluation and improvement of anomaly detection algorithms in Microsoft's cloud monitoring tools. We extrapolated this data to 2021 to provide live testing for analytics. 

## Accessing the data

This dataset is available as a public Postgres cluster with following credentials:

- **Host:** `chaosgenius-public.cjzi0pwi8ki4.ap-south-1.rds.amazonaws.com`
- **Port:** 5432
- **Database name:** `dataset`
- **Username:** `read_only`
- **Password:** `chaosgenius_io`

The table for this dataset is `cloud_cost`. 

## Data schema

Cloud Cost dataset has the following structure:

- date: datetime column
- region
- service
- cloud_cost: ideal metric column

This is a highly granular data and would be suitable for testing hourly anomaly detection. 

## Acknowledgement

Microsoft Open Source