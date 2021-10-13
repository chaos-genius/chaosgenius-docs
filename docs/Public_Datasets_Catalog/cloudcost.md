---
sidebar_position: 3
id: 'cloudcost'
---

# E-Commerce Transactions

E-Commerce Transactions is based on a [UCI ML repository dataset](https://archive.ics.uci.edu/ml/datasets/online+retail). This is a transnational data set which contains all the transactions occurring for a UK-based and registered non-store online retail. We extrapolated this data to 2021 to provide live testing for analytics. 

## Accessing the data

This dataset is available as a public Postgres cluster with following credentials:

- **Host:** `chaosgenius-public.cjzi0pwi8ki4.ap-south-1.rds.amazonaws.com`
- **Port:** 5432
- **Database name:** `dataset`
- **Username:** `read_only`
- **Password:** `chaosgenius_io`

The table for this dataset is `ecom_retail_data`. 

## Data schema

E-Commerce transactions dataset has the following structure:

- date: datetime column
- DayOfWeek
- PurchaseTime
- Country 
- CustomerID: high cardinality column
- InvoiceNo: high cardinality column
- StockCode: high cardinality column
- Quantity
- ItemTotalPrice: ideal metric column
- UnitPrice 

## Acknowledgement

Dr Daqing Chen, Director: Public Analytics group. chend '@' lsbu.ac.uk, School of Engineering, London South Bank University, London SE1 0AA, UK.
