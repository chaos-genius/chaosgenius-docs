---
sidebar_position: 1
id: 'tips'
---
# Tips for beginners

## Quick Start with Public Data Sets

* Use our Public Data Sets on Postgres and Snowflake instances as a sanity check while setting up analytics. We are making these available for other Databases and Data Warehouses as well.
  1. Postgres: details for the datasets can be found here: ([https://docs.chaosgenius.io/docs/Public\_Datasets\_Catalog/ecomm](https://docs.chaosgenius.io/docs/Public_Datasets_Catalog/ecomm))
  2. Snowflake: please find the instance details below.

  * "host/account": "nr13751.ap-south-1"  
  * "role": "READ\_ONLY"  
  * "warehouse": "PUBLIC\_WAREHOUSE"  
  * "database": "DEMO\_DB"  
  * "schema": "PUBLIC"  
  * "username": "CHAOSGENIUS"  
  * "password": "ChaosGenius001"  

  
## If stuck, share the following docker logs on Slack for quick debug

If our troubleshooting guide doesn't fix your issue you can share your docker logs with us. We will be able to replicate and investigate the issue in a better and faster way.  

* You can use these commands to share the logs:

```
docker logs chaosgenius-server &\> chaosgenius-server.log

docker logs chaosgenius-worker-analytics &\> chaosgenius-worker-analytics.log

docker logs chaosgenius-worker-alerts &\> chaosgenius-worker-alerts.log

docker logs chaosgenius-scheduler &\> chaosgenius-scheduler.log

docker-compose logs --no-color &\> chaosgenius-compose.log  
```

* Currently docker logs follow standard docker compose behavior - they do not persist across docker shutdowns. In case your scenario requires log persistence across multiple docker sessions, please get in touch with us to enable a fluentd based log persistence for your docker compose.
