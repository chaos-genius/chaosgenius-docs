---
sidebar_position: 1
id: 'adding-kpis'
---

# Adding KPIs

## What is a KPI
A Key Performance Indicator (KPI) is a statistic that is used to quantify progress towards critical business objectives. Some examples of KPIs include:
1. Monthly sales growth
2. Average purchase value
3. Daily active users

Alone, these KPIs will provide a baseline representation of how your business is doing. However, by adding these KPIs to Chaos Genius, you will be able to use our AutoRCA and Anomaly Detection tools to instantly gain insights that would have taken hours to gather manually.

## Add a KPI
KPIs can be added on the "KPI Explorer" page. Start by clicking "New KPI".

<img alt="Options For Adding A KPI" src="/img/kpi-and-dashboard/kpi-dashboard.png" width="800" />

## Table vs Custom Query KPIs

### Table KPIs

These KPIs are simpler to set up and great if you want to start using Chaos Genius as fast as possible. 

These KPIs can handle major cases. However, if you wish to do any kind of preprocessing, or collect data from multiple tables, you will need to use a Custom Query KPI.

### Custom Query KPIs

These KPIs are constructed using your own query. As opposed to Table KPIs, here you can utilize an added complexity by using multiple tables, performing single and multi-table transformations and more when defining your KPI.

Before proceeding, ensure you click "Test Query". If no errors are present, the added query is valid.
The validity of a query depends on the data source. For example, if the data source is Postgres or MySQL, the query needs to adhere to database's syntax.

<figure>
<img alt="Options For Adding A KPI" src="/img/kpi-and-dashboard/adding-kpi.png" width="800" />
<figcaption>The data above is used as an example. Your values will differ.</figcaption>
</figure>

## KPI Parameters

### Metric Column

The table column chosen for `Metric Column` is what Chaos Genius will aggregate. 

### Aggregate By

`Aggregate By` has three options:
1. Mean
2. Count (Does not matter which column chosen for `Metric Column` as the processed value will be the same)
3. Sum

### Datetime Columns

From all the columns displayed for `Datetime Columns`, you need to choose the one that stores time.

### Dimension Columns

These columns are the ones you want Chaos Genius to do analysis on. You can choose a maximum of 5 columns.

## KPI Validation

Once all the details for a new KPI are inputted and you click "Add KPI", Chaos Genius will determine whether it is a valid. If it is not, an error will appear, else you will be redirected to the KPI Dashboard. 

## Next Steps

Once the KPI is set up properly, you will be able log onto your dashboard everyday and find the new insights provided based on the updated data from your selected [Data Sources](../connecting-to-data-sources/data-source-connection-ui).
