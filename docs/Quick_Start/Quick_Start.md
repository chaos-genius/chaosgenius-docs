---
sidebar_position: 1
id: 'Install-Chaos-Genius'
---
# Install Chaos Genius

Note: These instructions have been tested on MacOS, Windows 10 and Ubuntu 20.04.

If you are facing any issues with the installation, drop a line to the Chaos Genius team and community on our Slack channel. 

Alternatively, visit our [Troubleshooting] section to find resolution for some of the most common issues raised by the    community while trying to set up Chaos Genius. 


## Setup Chaos Genius on MacOS, Ubuntu

Install Docker on your workstation (see [instructions](https://www.docker.com/products/docker-desktop)). 

*Note: There is a known issue with docker-compose 1.27.3. If you are using that version, please upgrade to 1.27.4.*

Once Docker is installed successfully, get started on your local machine by running:

```
git clone https://github.com/chaos-genius/chaos_genius

cd chaos_genius

docker-compose up
```
Once you see the Chaos Genius success banner, the UI is ready to be accessed at[  ](http://localhost:8000/)<http://localhost:8000>.

Some users using Macs with an M1 chip are facing some problems in deploying Chaos Genius. The problem is related to the chip and Docker. If you are facing any other issues while installing, please visit our section on [Troubleshooting.]

## Setup Chaos Genius on Windows

## Next Steps

Next, follow the following 3 step process from the setup screen:

-   Add Data Source

-   Add KPI

-   Activate Analytics

![Set Up](/img/Quick_Start/setup.png)
