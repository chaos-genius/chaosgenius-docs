---
sidebar_position: 2
id: 'lyft'
---

# Ridehailing Price

This dataset is based on a [Kaggle dataset](https://www.kaggle.com/ravi72munde/uber-lyft-cab-prices) that simulates rides in Boston for Lyft & Uber. We extrapolated this data for Lyft to 2021 to provide live analytics. 

## Accessing the data

The table for this dataset is `lyft_data`. Visit our [Data Source Credentials](/docs/Public_Datasets_Catalog/access_data) page to get the appropriate database or data warehouse credentials.

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
