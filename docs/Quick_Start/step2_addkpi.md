---
sidebar_position: 3
id: 'step2_add_kpi'
---
# Step 2: Add KPI

Once a data source is successfully added, you can start defining KPIs using that data source. On pressing the "Add a KPI" button you will be required to fill in the following details:

-   **KPI Name** : Name of your KPI

-   **Data Source** : Data source you will be using to define the KPI

-   **Data Set Type**

    - Table : If the KPI is directly related to an existing Table, select 'Table' as an option
   
    - Query: If the KPI definition requires using multiple tables, then 'Query' option can be used to define the query;

-   **Metric Column**: Select the column corresponding to the KPI

-   **Aggregate by**: You can select the operation you want to perform on the Metric Column to define the KPI - Sum, Average or Count

-   **Datetime Column**: Select the date column which will be used by Chaos Genius for the time-series analysis

-   **Dimensions**: You can select upto 10 dimensions. These are the Dimensions across which the defined KPI will be monitored for analysis like DeepDrills and Anomaly Detection.

For detailed documentation on KPIs please refer to the section KPI Explorer.
