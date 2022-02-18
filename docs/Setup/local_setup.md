---
sidebar_position: 1
id: 'local-setup'
---

# Local System Setup

## Step 1: Installing pre-requisites

We need to install docker and docker-compose. For local systems we recommend installing docker desktop.  
Here are platform specific installation instructions for this.

### MacOS & Ubuntu

Install Docker on your workstation (see [instructions](https://www.docker.com/get-started)).

**Note**: Macs with Apple Silicon (M1) processors are currently not supported due to issues related to Docker. Follow [this issue](https://github.com/chaos-genius/chaos_genius/issues/292) for updates.

### Windows

You need to install Docker on Windows workstation, please follow the steps mentioned [here](https://docs.docker.com/desktop/windows/install/).

**Note**: There is a known issue with docker-compose 1.27.3. If you are using that version, please upgrade to 1.27.4.

## Step 2: Cloning the repository

1. Clone the repository  
    ```git clone https://github.com/chaos-genius/chaos_genius```
2. Move into the repository:  
    ```cd chaos_genius```

## Step 3: Start the containers

1. For Default Installation, bring containers to life with:
    ```sudo docker-compose up```

    Or you can use the detached mode, which is preferable on servers as it allows the containers to run in the background.
    ```
    sudo docker-compose up -d
    ```

    :::info
    If you also need any third-party data sources such as `Google Sheets`, `Google Analytics`, `Shopify`, `Stripe`, `Bind Ads`, `Facebook Marketing` or `Google Ads`, use the `docker-compose.thirdparty.yml` file:

    ```
    sudo docker-compose -f docker-compose.thirdparty.yml up -d
    ```
    :::

2. To view real time logs run:
    ```
    sudo docker-compose logs -f
    ```

## Step 4: Access the Dashboard

Once you see the Chaos Genius success banner, the UI is ready to be accessed at [http://localhost:8080](http://localhost:8080).

If everything was successful, you should see this page at the URL:
![Initial UI Screen](/img/Setup/ui-init.png)
