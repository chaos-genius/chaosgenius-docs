---
sidebar_position: 1
id: 'Upgrading-Chaos-Genius'
---

# Upgrading Chaos Genius

## From a previous version

To upgrade Chaos Genius from a previous version, pull the latest changes from both the repository and Dockerhub and then restart the services.

For the Default Installation, use:
```
docker-compose stop

git pull

docker-compose pull

docker-compose up
```

:::info
For the Third-party version Installation, use these commands instead:
```
docker-compose -f docker-compose.thirdparty.yml stop

git pull

docker-compose -f docker-compose.thirdparty.yml pull

docker-compose -f docker-compose.thirdparty.yml up
```
:::

## Upgrading from Default to Third-party version

To upgrade Chaos Genius from the Default Installation to Third-party version installation, use these commands:
```
docker-compose stop

docker-compose -f docker-compose.thirdparty.yml up
```

:::info

All third-party data sources are NOT enabled by default. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable specific third-party data sources.

:::
