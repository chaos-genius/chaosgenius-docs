---
sidebar_position: 1
id: 'lyft'
---

# Lyft Dataset

This dataset is based on [Kaggle dataset](https://www.kaggle.com/ravi72munde/uber-lyft-cab-prices) that simulates rides in Boston. We extrapolated this data to 2021 to provide live testing for the data. 

## Accessing the data

This dataset is available as a public Postgres cluster with following credentials:

**Host:** chaosgenius-public.cjzi0pwi8ki4.ap-south-1.rds.amazonaws.com
**Port:** 5432
**Database name:** dataset
**Username:** read_only
**Password:** chaosgenius_io

The table for this dataset is `lyft_data`. 

## Data schema

Lyft dataset has the following structure:

- source
- destination
- PeriodOfDay
- DayofWeek
- name
- num_rides
- distance
- price 
- date