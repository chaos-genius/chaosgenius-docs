---
sidebar_position: 2
id: 'aws-setup'
---

# Setting up Chaos Genius on AWS

## Step 1: Setting up your account

Create or log into your AWS account.

## Step 2: Deploying the instance

Naviate to EC2 Management Console and select Launch Instance. Follow the following steps during instance setup:

1. Choose AMI: Select Ubuntu Server 20.04 LTS (HVM for x86 as your AMI
    ![Choose AMI](/img/Setup/AWS/ami-select.png)
2. Choose Instance Type: For KPIs that process up to 10M rows, use an xlarge instance like m5.xlarge
    ![Choose Instance](/img/Setup/AWS/instance-select.png)
3. Configure Instance: In configure instance details select the requisite org VPC settings to access DBs
4. Add Storage: Update root storage to 30GB for buffer with metadata & analytics results
5. Add Tags: Add chaosgenius tags depending on your organization's tag nomenclature
6. Configure Security Group: Add rule to support port 8080 for IPv4 & IPv6
    ![Configure Security Group](/img/Setup/AWS/configure-secgroup.png)
7. Launch the instance

## Step 3: Installing Dependencies

1. Install [docker](https://docs.docker.com/engine/install/ubuntu/) on your machine.
2. Verify your installation of docker with `sudo systemctl status docker`.
    Your output should be similar to this:
    ![Docker verification output](/img/Setup/docker-output.png)
3. Install [docker-compose](https://docs.docker.com/compose/install/) on your machine.
4. Verify your installation of docker-compose with `docker-compose --version`.
    Your output should be similar to this:
    ![Docker verification output](/img/Setup/docker-compose-output.png)

## Step 4: Cloning the repository

1. Clone the repository  
    ```git clone https://github.com/chaos-genius/chaos_genius```
2. Move into the repository:  
    ```cd chaos_genius```

## Step 5: Start the containers

1. Bring containers to life with:  
    ```sudo docker-compose up```  

    Or you can use the detached mode, which is preferable on servers as it allows the containers to run in the background.  
    ```sudo docker-compose up -d```
2. To view real time logs run:  
    ```sudo docker-compose logs -f```

## Step 6: Access the Dashboard

Once you see the Chaos Genius success banner, the UI is ready to be accessed at `<Public IP>:8080`.  
If everything was successful, you should see this page at the URL:
![Initial UI Screen](/img/Setup/ui-init.png)

Note: Check your dashboard for your machine’s public IP.
