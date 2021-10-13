---
sidebar_position: 2
id: 'lyft'
---

# Ridehailing Price

This dataset is based on a [Kaggle dataset](https://www.kaggle.com/ravi72munde/uber-lyft-cab-prices) that simulates rides in Boston for Lyft & Uber. We extrapolated this data for Lyft to 2021 to provide live analytics. 

## Accessing the data

This dataset is available as a public Postgres cluster with following credentials:

- **Host:** `chaosgenius-public.cjzi0pwi8ki4.ap-south-1.rds.amazonaws.com`
- **Port:** 5432
- **Database name:** `dataset`
- **Username:** `read_only`
- **Password:** `chaosgenius_io`

The table for this dataset is `lyft_data`. 

## Data schema

Ridehailing dataset has the following structure:

- source
- destination
- PeriodOfDay
- DayofWeek
- name
- num_rides
- distance
- price: ideal metric column
- date: datetime column

## Acknowledgement

We thank [RaviMunde](https://www.kaggle.com/ravi72munde) for providing the base dataset. 
