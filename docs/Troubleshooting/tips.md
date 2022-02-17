---
sidebar_position: 1
id: 'tips'
---
# Tips for beginners

## Quick Start with Public Data Sets

Use our Public Data Sets on Postgres and Snowflake instances as a sanity check while setting up analytics. We are making these available for other Databases and Data Warehouses as well.

Visit our [Accessing the Data](/docs/Public_Datasets_Catalog/access_data) page to get the appropriate database or data warehouse credentials.

## If stuck, share docker logs on Slack for quick debug

If our troubleshooting guide doesn't fix your issue you can share your docker logs with us. We will be able to replicate and investigate the issue in a better and faster way.

On **Linux, MacOS or WSL**, use these commands to generate log files:
```bash
docker logs chaosgenius-server &> chaosgenius-server.log
docker logs chaosgenius-worker-analytics &> chaosgenius-worker-analytics.log
docker logs chaosgenius-worker-alerts &> chaosgenius-worker-alerts.log
docker logs chaosgenius-scheduler &> chaosgenius-scheduler.log
docker-compose logs --no-color &> chaosgenius-compose.log
```

On **CMD (Command Prompt) or Powershell** on Windows, use these commands instead:
```
docker logs chaosgenius-server > chaosgenius-server.log 2>&1
docker logs chaosgenius-worker-analytics > chaosgenius-worker-analytics.log 2>&1
docker logs chaosgenius-worker-alerts > chaosgenius-worker-alerts.log 2>&1
docker logs chaosgenius-scheduler > chaosgenius-scheduler.log 2>&1
docker-compose logs --no-color > chaosgenius-compose.log 2>&1
```

Attach all of the generated `.log` files with your message.

Note: Currently docker logs follow standard docker compose behavior - they do not persist across docker shutdowns. In case your scenario requires log persistence across multiple docker sessions, please get in touch with us to enable a fluentd based log persistence for your docker compose.

## Sentry Logging

To help us debug and classify errors, you can opt-in to send us error messages with Sentry. See our our [Configuring Chaos Genius](/docs/Operator_Guides/Configuration/analytics-parameters) page to set up Sentry.
