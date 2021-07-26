---
sidebar_position: 1
id: 'adding-kpis'
---

# Adding KPIs

KPIs can be added on the "KPI Explorer" page. Start by clicking "New KPI".

An overview for each input is provided below to aid with adding your KPI.
<figure>
<img alt="Options For Adding A KPI" src="/img/kpi-and-dashboard/adding-kpi.png" width="800" />
<figcaption>Example data is used. Your values will differ.</figcaption>
</figure>

### Data Source
When you click on `Select Data Source`, all your data sources will be shown. Select the one on which you wish to perform analysis.

If no data sources are displayed, refer to [Connecting Data Sources](/docs/connecting-to-data-sources/Data%20Source%20Connection%20UI).

### Dataset Type
For `Select Dataset Type`, the two options are "Table" and "Query".

If you select "Table", Chaos Genius will analyze your Data Source, automatically gathering all its information to be used in the input fields below.

If you prefer a more hands-on method, "Query" allows you to write a query to manually gather the information from your data source.

### Table Name (Only if Dataset Type = "Table")

When you click `Table Name`, a list of tables will be shown. Choose the one you want Chaos Genius to analyze.

The table chosen will impact which columns are available in the input fields below.

### Query (Only if Dataset Type = "Query")

In this textbox, write a query to gather information for Chaos Genius. For example, if the data source is Postgres or MySQL, the query needs to adhere to database's syntax.

Once the query is written, press "Test Query". If no errors were present, the input fields below should be populated with options for you to choose from.

<figure>
<img alt="Options For Adding A KPI" src="/img/kpi-and-dashboard/add-kpi-query.png" width="400" />
<figcaption>An example of a valid query for a Postgres database with a table called 'reviews'</figcaption>
</figure>

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