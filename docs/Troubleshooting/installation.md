---
sidebar_position: 2
id: 'installation'
---
# Installation

## 

### Problem: Don't have sufficient resources allocated to install Chaos Genius

By default Docker configures resources such as CPU, memory, disk and network. Sometimes these default settings are not adequate and you might run into issues such as an Out-of-Memory Error.

**Possible Solutions: **

Chaos Genius requires you to set Docker Memory Space to 8 GB before installation. To configure memory or any other resources, you can follow the steps provided in the following link: [https://docs.docker.com/desktop/mac/\#resources](https://docs.docker.com/desktop/mac/#resources)  

### Problem: Experiencing Disk Space Error

Chaos Genius services are not able to write to the disk. In the docker logs you may see an error message that is appended by:  No space left on device

**Possible Solutions: **

This typically happens with containers that require storage like redis or postgres.. In case of no space left on device messages, please try 'docker system prune --volumes'. This link should be helpful for this:[https://forums.docker.com/t/docker-no-space-left-on-device/69205/7](https://forums.docker.com/t/docker-no-space-left-on-device/69205/7). Always ensure there are no residual volumes or data left behind from previous builds for a clean installation across major versions.   

### Problem: Facing Connection Timeout Issues

After cloning the Chaos Genius repository, the 'docker-compose up' command fails to run citing a Connection Timeout Error. You will see either of the following statements as part of your error message on the terminal: 

* UnixHTTPConnectionPool(host='localhost', port=None): Read timed out.
* ERROR: An HTTP request took too long to complete.

**Possible Solutions: **

This error usually occurs when you have a slow network connection. Possible fix for this issue is to increase the value of the COMPOSE\_HTTP\_TIMEOUT environment variable. This variable configures the time (in seconds) a request to the Docker daemon is allowed to hang before Compose considers it failed. It defaults to 60 seconds. Try using the command: 'COMPOSE\_HTTP\_TIMEOUT=200 docker-compose up'.  
  

### Problem: Resolving Port Conflicts

While running Chaos Genius on Docker, each container runs on a specific port. You will run into an error if you have any other service using those ports. You get the following error message:

Error starting userland proxy: listen tcp4 0.0.0.0:<port-number\>: bind: address already in use

**Possible Solutions: **

The ports listed below are being exposed by the containers. Make sure none of these ports are being used by any other services on the system before starting up ChaosGenius.

Ports : \[5000, 8080, 8000, 8001, 7233, 6379, 5433\]
