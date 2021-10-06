---
sidebar_position: 1
id: 'Install-Chaos-Genius'
---
# Install Chaos Genius

Install Docker on your workstation (see[  instructions](https://www.docker.com/products/docker-desktop)). Note: There is a known issue with docker-compose 1.27.3. If you are using that version, please upgrade to 1.27.4.

Once Docker is installed successfully, get started on your local machine by running:

```
git clone https://github.com/chaos-genius/chaos_genius

cd chaos_genius

docker-compose up
```
Once you see the Chaos Genius success banner, the UI is ready to be accessed at[  ](http://localhost:8000/)<http://localhost:8000>.

If you are facing any issues while installing, please visit our detailed section on [Installation](https://docs.google.com/document/d/1y568-aky5EXbR3RhA1kho4kqpxcHifcDJfk6ft5nRC8/edit#heading=h.xqge4hkxkeui). 

Next, follow the following 3 step process from the setup screen:

-   Add Data Source

-   Add KPI

-   Activate Analytics
