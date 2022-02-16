---
sidebar_position: 1
id: 'tips'
---
# Tips for beginners
<p></p>

## Quick Start with Public Data Sets

Use our Public Data Sets on Postgres and Snowflake instances as a sanity check while setting up analytics. We are making these available for other Databases and Data Warehouses as well.

Visit our [Accessing the Data](/docs/Public_Datasets_Catalog/access_data) page to get the appropriate database or data warehouse credentials.
  
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

## Sentry Logging

To help us debug and classify errors, you can opt-in to send us error messages with Sentry. See our our [Configuring Chaos Genius](/docs/Operator_Guides/Configuration/analytics-parameters) page to set up Sentry.