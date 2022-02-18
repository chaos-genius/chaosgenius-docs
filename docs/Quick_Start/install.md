---
sidebar_position: 2
id: 'Install-Chaos-Genius'
---

# Install Chaos Genius

Note: These instructions have been tested on MacOS, Windows 10 and Ubuntu 20.04. 

Visit our [Troubleshooting](/Troubleshooting/tips.md) section to find resolution for some of the most common issues raised by the community while trying to set up Chaos Genius. 


## Setup on Linux or MacOS

Install Docker on your workstation (see [instructions](https://www.docker.com/get-started)).

*Note: There is a known issue with docker-compose 1.27.3. If you are using that version, please upgrade to 1.27.4.*

*Note: Macs with Apple Silicon (M1) processors are currently not supported due to issues related to Docker.*


Chaos Genius comes in two versions. The `Default` version is lighter and works with all DBs/DWs and is recommended. The `Third-party` version enables more 3rd party data sources in addition to databases & data warehouses. 

### Chaos Genius - Default Installation (Recommended)

If you only need databases and data warehouses such as `Postgres`, `MySQL`, `BigQuery`, `Redshift` or `Snowflake`, use these commands:

```
git clone https://github.com/chaos-genius/chaos_genius

cd chaos_genius

docker-compose up
```

:::info
### Chaos Genius - Third-party Version Installation

If you also need any third-party data sources such as `Google Sheets`, `Google Analytics`, `Shopify`, `Stripe`, `Bind Ads`, `Facebook Marketing` or `Google Ads`, use these commands instead:

```
git clone https://github.com/chaos-genius/chaos_genius

cd chaos_genius

docker-compose -f docker-compose.thirdparty.yml up
```
:::

### Accessing the UI

Once you see the Chaos Genius success banner, the UI is ready to be accessed at [http://localhost:8080](http://localhost:8080)


## Setup on Windows

You need to install Docker on Windows workstation, please follow the steps mentioned [here](https://docs.docker.com/desktop/windows/install/).

Chaos Genius comes in two versions. The `Default` version is lighter and works with all DBs/DWs and is recommended. The `Third-party` version enables more 3rd party data sources in addition to databases & data warehouses. 

### Chaos Genius - Default Installation (Recommended)

If you only need databases and data warehouses such as `Postgres`, `MySQL`, `BigQuery`, `Redshift` or `Snowflake`, use these commands:

```
git clone https://github.com/chaos-genius/chaos_genius

cd chaos_genius

docker-compose up
```

:::info
### Chaos Genius - Third-party Version Installation
If you also need any third-party data sources such as `Google Sheets`, `Google Analytics`, `Shopify`, `Stripe`, `Bind Ads`, `Facebook Marketing` or `Google Ads`, use these commands instead:

```
git clone https://github.com/chaos-genius/chaos_genius

cd chaos_genius

docker-compose -f docker-compose.thirdparty.yml up
```
:::

### Accessing the UI

Once you see the Chaos Genius success banner, the UI is ready to be accessed at [http://localhost:8080](http://localhost:8080).

## Next Steps

Next, follow the following 3 step process from the setup screen:

-   Add Data Source

-   Add KPI

-   Activate Analytics

![Set Up](/img/Quick_Start/setup.png)
