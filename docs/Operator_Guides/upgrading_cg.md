---
sidebar_position: 1
id: 'Upgrading-Chaos-Genius'
---

# Upgrading Chaos Genius

## From a previous version

To upgrade Chaos Genius from a previous version, pull the latest changes from both the repository and Dockerhub and then restart the services.

For the default installation, use:
```
docker-compose stop

git pull

docker-compose pull

docker-compose up
```

:::info
For the third-party installation, use these commands instead:
```
docker-compose -f docker-compose.thirdparty.yml stop

git pull

docker-compose -f docker-compose.thirdparty.yml pull

docker-compose -f docker-compose.thirdparty.yml up
```
:::

## From the default installation to third-party installation

To upgrade Chaos Genius from the default installation to third-party installation, use these commands:
```
docker-compose stop

docker-compose -f docker-compose.thirdparty.yml up
```

:::info

Not all third-party data sources are enabled by default. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable specific third-party data sources.

:::
