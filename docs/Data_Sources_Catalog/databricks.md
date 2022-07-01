---
sidebar_position: 7
id: 'databricks'
---

# Databricks


## Connecting Databricks

Get Connection details from Databricks web console:

* Switch to **SQL** persona from sidebar.


<img alt="Change User Persona" src="/img/connecting-to-data-sources/sql_persona.png" width="200" class="left-spaced-image"/>



* Click <img alt="Change User Persona" src="/img/connecting-to-data-sources/warehouses-icon.png" width="30" class="inline-image" />  SQL warehouse in the sidebar.

* Select SQL warehouse/endpoint of choice and switch to `Connection Details` tab.

<img alt="Change User Persona" src="/img/connecting-to-data-sources/databricks-connection-details.png" width="450" class="left-spaced-image" /> 




<br/>
<br/>
<br/>


To add Databricks as a data source, you will need the following information:
* **Host**: Server hostname for the cluster or SQL endpoint. eg: `dbc-a1e2345c-6fe7.cloud.databricks.com`
* **Cluster HTTP Path**: The HTTP path for cluster or SQL endpoint.
* **Access Token**: Personal access token for the workspace for the cluster or SQL endpoint.
* **Catalog**: Catalog for the connection. If left blank, default catalog will be used(typically 'hive_metastore').


   



<img alt="Options For Databricks" src="/img/connecting-to-data-sources/databricks.png" width="500" class="left-spaced-image"/>