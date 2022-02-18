---
sidebar_position: 1
id: prereqs
---

# Prerequisites

## System requirements

### Minimum requirements

For smaller datasets and for testing Chaos Genius, an instance with the following specifications is required:
- 2 vCPUs
- 4GB memory
- 10GB storage space

This has been tested on a `t2.medium` AWS EC2 instance.

:::info
If you need any third-party data sources such as `Google Sheets`, `Google Analytics`, `Shopify`, `Stripe`, `Bind Ads`, `Facebook Marketing` or `Google Ads`, you will need:
- 2 vCPUs
- 8GB memory
- 20GB storage space
:::

### Recommended requirements

For KPIs that process up to 10M rows, an instance with the following specifications is recommended:
- 4 vCPUs
- 16GB memory
- 30GB storage space

This has been tested on a `m5.xlarge` AWS EC2 instance and a `e2-standard-4` GCP instance.

## Software requirements

Chaos Genius has been tested on Linux (Ubuntu 20.04), MacOS and Windows (10 and 11).

The following needs to be installed on the system:
- [Docker](https://www.docker.com/get-started) (tested on `20.10`)
- [docker-compose](https://docs.docker.com/compose/install/#install-using-pip) (tested on versions `1.27` to `1.29`)
    - Note: There is a known issue with docker-compose `1.27.3`. If you are using that version, please upgrade to `1.27.4`.
- `git` command-line
