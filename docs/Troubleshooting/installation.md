---
sidebar_position: 2
id: 'installation'
---
# Installation

<details><summary><font size="6"><b>Don't have sufficient resources allocated to install CG</b></font></summary>
<p></p><p>

By default Docker configures resources such as CPU, memory, disk and network. Sometimes these default settings are not adequate and you might run into issues such as an Out-of-Memory Error.

Chaos Genius requires you to set Docker Memory Space to 8 GB before installation. To configure memory or any other resources, you can follow the steps provided in the following link: [https://docs.docker.com/desktop/mac/\#resources](https://docs.docker.com/desktop/mac/#resources)  

</p>
</details>

<p></p>

<details><summary><font size="6"><b>Experiencing Disk Space Error</b></font></summary>
<p></p><p>

Chaos Genius services are not able to write to the disk. In the docker logs you may see an error message that is appended by:<br/> 
`No space left on device`

This typically happens with containers that require storage like redis or postgres.<br/> 
In case of no space left on device messages, please try:  `docker system prune --volumes`. <br/>
This link should be helpful for this: [https://forums.docker.com/t/docker-no-space-left-on-device/69205/7](https://forums.docker.com/t/docker-no-space-left-on-device/69205/7). Always ensure there are no residual volumes or data left behind from previous builds for a clean installation across major versions. 

</p>
</details>

<p></p>

<details><summary><font size="6"><b>Facing Connection Timeout Issues</b></font></summary>
<p></p><p>

After cloning the Chaos Genius repository, the 'docker-compose up' command fails to run citing a Connection Timeout Error. You will see either of the following statements as part of your error message on the terminal: 
* `UnixHTTPConnectionPool(host='localhost', port=None): Read timed out`.
* `ERROR: An HTTP request took too long to complete`.

This error usually occurs when you have a slow network connection. Possible fix for this issue is to increase the value of the `COMPOSE\_HTTP\_TIMEOUT` environment variable. This variable configures the time (in seconds) a request to the Docker daemon is allowed to hang before Compose considers it failed. It defaults to 60 seconds. Try using the command: `COMPOSE\_HTTP\_TIMEOUT=200 docker-compose up`.  

</p>
</details>

<p></p>

<details><summary><font size="6"><b>Resolving Port Conflicts</b></font></summary>
<p></p><p>

While running Chaos Genius on Docker, each container runs on a specific port. You will run into an error if you have any other service using those ports. You get the following error message:<br/>
`Error starting userland proxy: listen tcp4 0.0.0.0:<port-number\>: bind: address already in use`

The ports listed below are being exposed by the containers. Make sure none of these ports are being used by any other services on the system before starting up ChaosGenius.<br/>
**Ports** : \[5000, 8080, 8000, 8001, 7233, 6379, 5433\]

</p>
</details> 