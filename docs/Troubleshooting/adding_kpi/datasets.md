---
sidebar_position: 1
id: 'large_datasets'
---
# Handling Large Datasets

<p></p>

If you're data set is large (exceeding 10M rows of data in the last 30 days), likely you will face issues while creating KPIs. In such cases, we recommend creating an aggregated table/view by aggregating your data by over the time column. This significantly improves the analytics performance and reduces compute requirements. 
