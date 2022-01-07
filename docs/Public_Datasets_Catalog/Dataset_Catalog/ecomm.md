---
sidebar_position: 1
id: 'ecomm'
---

# E-Commerce Transaction

E-Commerce Transaction is based on a [UCI ML repository dataset](https://archive.ics.uci.edu/ml/datasets/online+retail). This is a transnational data set which contains all the transactions occurring for a UK-based and registered non-store online retail. We extrapolated this data to 2021 to provide live testing for analytics. 

## Accessing the data

The table for this dataset is `ecom_retail_data`. Visit our [Data Source Credentials](/docs/Public_Datasets_Catalog/access_data) page to get the appropriate database or data warehouse credentials.

## Data schema

E-Commerce transaction dataset has the following structure:

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

We thank Dr Daqing Chen, Director: Public Analytics group. chend '@' lsbu.ac.uk, School of Engineering, London South Bank University, London SE1 0AA, UK.
