---
sidebar_position: 1
id: 'Upgrading-Chaos-Genius'
---

# Upgrading Chaos Genius

To upgrade Chaos Genius from a previous version, pull the latest changes from both the repository and dockerhub and then restart the services.  

```
git pull

docker-compose pull

docker-compose stop

docker-compose up
```