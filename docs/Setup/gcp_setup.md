---
sidebar_position: 3
id: 'gcp-setup'
---

# GCP Deployment

## Step 1: Setting up your account

Create or log into your GCP account & select appropriate project.

## Step 2: Deploying the instance

1. Enable the Compute Engine API and create a new VM instance.
    ![Create a new VM](/img/Setup/GCP/create-vm.png)
2. Name your VM chaosgenius
3. Select your desired region and zone.
4. For KPIs that process up to 10M rows, select e2-standard-4 machine type under the E2 series of the general-purpose machine family. (This will provision 4 vCPUs and 16 GB of RAM)
    ![Set type of VM](/img/Setup/GCP/vm-type.png)
5. Change the boot disk from the default Debian Linux to Ubuntu 20.04 LTS. Increase the boot disk size to 30GB. (30GB is recommended)
    ![Set boot disk of VM](/img/Setup/GCP/vm-disk.png)
6. Click on Networking, and under network tags, type in chaosgenius as a tag.
    ![Set Networking Properties](/img/Setup/GCP/vm-network.png)
7. Leave the other options as default and create the instance.
8. Wait for the instance to be provisioned.

## Step 3: Configure GCP Networking and Firewall

1. From the GCP console sidebar, Choose Networking > VPC network > Firewall.  
   ![Set Firewall](/img/Setup/GCP/vm-firewall.png)
2. Choose "Create Firewall Rule"
3. Name the rule as chaosgenius
4. To apply the rule to select VM instances, select Targets > "Specified target tags", and enter chaosgenius into Target tags
5. Set Source IPv4 ranges to allow traffic from all IPs: 0.0.0.0/0
6. To allow incoming TCP connections to port 8080, in Specified Protocols and Ports, check tcp and enter 8080  
   ![Set TCP connections](/img/Setup/GCP/vm-tcp.png)
7. Click Create

## Step 4: Installing Dependencies

1. Install [docker](https://docs.docker.com/engine/install/ubuntu/) on your machine.
2. Verify your installation of docker with `sudo systemctl status docker`.
    Your output should be similar to this:
    ![Docker verification output](/img/Setup/docker-output.png)
3. Install [docker-compose](https://docs.docker.com/compose/install/) on your machine.
4. Verify your installation of docker-compose with `docker-compose --version`.
    Your output should be similar to this:
    ![Docker verification output](/img/Setup/docker-compose-output.png)

## Step 5: Cloning the repository

1. Clone the repository  
    ```git clone https://github.com/chaos-genius/chaos_genius```
2. Move into the repository:  
    ```cd chaos_genius```

## Step 6: Start the containers

1. Bring containers to life with:  
    ```sudo docker-compose up```  

    Or you can use the detached mode, which is preferable on servers as it allows the containers to run in the background.  
    ```sudo docker-compose up -d```

    If you also need any third-party data sources such as Google Sheets, Google Analytics, Shopify, Stripe, Bind Ads, Facebook Marketing or Google Ads, use the `docker-compose.thirdparty.yml` file:  
    ```sudo docker-compose -f docker-compose.thirdparty.yml up -d```

2. To view real time logs run:  
    ```sudo docker-compose logs -f```

## Step 7: Access the Dashboard

Once you see the Chaos Genius success banner, the UI is ready to be accessed at `<Public IP>:8080`.  
If everything was successful, you should see this page at the URL:
![Initial UI Screen](/img/Setup/ui-init.png)

Note: Check your dashboard for your machine’s public IP.
