---
sidebar_position: 1
id: 'Upgrading-Chaos-Genius'
---

# Upgrading Chaos Genius

## From a previous version

To upgrade Chaos Genius from a previous version, pull the latest changes from both the repository and Dockerhub and then restart the services.

For the default installation, use:
```bash
docker-compose stop

git pull

docker-compose pull

docker-compose up
```

For the third-party installation, use:
```bash
docker-compose -f docker-compose.thirdparty.yml stop

git pull

docker-compose -f docker-compose.thirdparty.yml pull

docker-compose -f docker-compose.thirdparty.yml up
```

## From the default installation to third-party installation

To upgrade Chaos Genius from the default installation to third-party installation, use these commands:
```bash
docker-compose stop

docker-compose -f docker-compose.thirdparty.yml up
```
