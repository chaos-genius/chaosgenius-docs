---
sidebar_position: 2
id: 'installation'
---
# Installation

## 

### Port Conflicts

You may run into an error if you have any other service using the port(s) used by Chaos Genius. You get the following error message:

```
Error starting userland proxy: listen tcp4 0.0.0.0:<port-number>: bind: address already in use
```

**Possible Solutions:**

By default, Chaos Genius runs on port `8080`. Ensure that this port is not being used by any other service before starting up Chaos Genius.

Note: When installing the third-party version, ports `8080` and `5433` are used.

In case the ports cannot be freed, you can manually change the port used by Chaos Genius.
- If you're using the default installation, open the `docker-compose.yml` file present in the directory cloned during installation. Search for and replace `8080:8080` with `<your-port-here>:8080`.
- If you're using the third-party installation, change the `8080` port as above. Additionally, search for and replace `5433:5432` with `<your-port-here>:5432`.

### Insufficient Resources 

By default Docker configures resources such as CPU, memory, disk and network. Sometimes these default settings are not adequate and you might run into issues such as an Out-of-Memory Error.

**Possible Solutions:**

Chaos Genius requires you to set Docker Memory Space to 4 GB (8 GB in case you're running the third-party version) before installation. To configure memory or any other resources, you can follow the steps provided in the following links:
- [For Mac systems](https://docs.docker.com/desktop/mac/#resources)
- [For Windows systems](https://docs.docker.com/desktop/windows/#resources)

Note: this does not apply to Linux.

### Disk Space Error

Chaos Genius services are not able to write to the disk. In the docker logs you may see an error message that is appended by: `No space left on device`.

**Possible Solutions:**

This typically happens with containers that require storage such as Redis or Postgres. Please ensure that the instance running Chaos Genius has at least 20 GB of storage space.

To free up storage space taken up by docker, please see the following discussion: [https://forums.docker.com/t/docker-no-space-left-on-device/69205/2](https://forums.docker.com/t/docker-no-space-left-on-device/69205/2).

Note: `docker system prune` or `docker volume prune` can help reclaim space taken up by Docker, but this is a destructive operation that can erase data stored by Chaos Genius or other containers running on the system.

### Connection Timeout Issues

After cloning the Chaos Genius repository, the `docker-compose up` command fails to run citing a Connection Timeout Error. You will see either of the following statements as part of your error message on the terminal:

* `UnixHTTPConnectionPool(host='localhost', port=None): Read timed out.`
* `ERROR: An HTTP request took too long to complete.`

**Possible Solutions:**

This error usually occurs when you have a slow network connection or a slow system. A possible fix for this issue is to increase the value of the `COMPOSE_HTTP_TIMEOUT` environment variable. This variable configures the time (in seconds) a request to the Docker daemon is allowed to hang before Compose considers it failed. It defaults to 60 seconds. Try using the command: `COMPOSE_HTTP_TIMEOUT=200 docker-compose up`.

