---
sidebar_position: 3
id: 'Server Setup'
---

# Server Setup

Follow the section for your cloud service provider to set up Chaos Genius.

## Step 1.1: Set up your Instance

### AWS

#### Setting up your account

Create or log into an AWS account.

#### Deploying the instance

1. Choose AMI: Select Ubuntu Server 20.04 LTS (HVM for x86 as your AMI
2. Choose Instance Type: For KPIs that process up to 10M rows, use an xlarge instance like m5.xlarge
3. Configure Instance: In configure instance details select the requisite org VPC settings to access DBs
4. Add Storage: Update root storage to 25GB for buffer with metadata & analytics results
5. Add Tags: Add chaosgenius tags depending on your org nomenclature
6. Configure Security Group: Add rule to support port 8080 for IPv4 & IPv6
7. Launch the instance

### GCP

#### Setting up your account

Create New GCP project and set up a billing account.

#### Deploying the instance

1. Enable the Compute Engine API and create a new VM instance.
    ![Create a new VM](/img/Setup/GCP/create-vm.png)
2. Name your VM chaosgenius
3. Select your desired region and zone.
4. Select e2-standard-4 machine type under the E2 series of the general-purpose machine family. (This will provision 4 vCPUs and 16 GB of RAM)
    ![Set type of VM](/img/Setup/GCP/vm-type.png)
5. Change the boot disk from the default Debian Linux to Ubuntu 20.04 LTS. Increase the boot disk size to 30GB. (30GB is recommended)
    ![Set boot disk of VM](/img/Setup/GCP/vm-disk.png)
6. Click on Networking, and under network tags, type in chaosgenius as a tag.
    ![Set Networking Properties](/img/Setup/GCP/vm-network.png)
7. Leave the other options as default and create the instance.
8. Wait for the instance to be provisioned.

#### Configure GCP Networking and Firewall

1. From the GCP console sidebar, Choose Networking > VPC network > Firewall.  
   ![Set Firewall](/img/Setup/GCP/vm-firewall.png)
2. Choose "Create Firewall Rule"
3. Name the rule as chaosgenius
4. To apply the rule to select VM instances, select Targets > "Specified target tags", and enter chaosgenius into Target tags
5. Set Source IPv4 ranges to allow traffic from all IPs: 0.0.0.0/0
6. To allow incoming TCP connections to port 8080, in Specified Protocols and Ports, check tcp and enter 8080  
   ![Set TCP connections](/img/Setup/GCP/vm-tcp.png)
7. Click Create


## Step 1.2: Installing Dependencies

1. Install [docker](https://docs.docker.com/engine/install/ubuntu/) on your machine.
2. Verify your installation of docker with `sudo systemctl status docker`.
    Your output should be similar to this:
    ![Docker verification output](/img/Setup/docker-output.png)
3. Install [docker-compose](https://docs.docker.com/compose/install/) on your machine.
4. Verify your installation of docker-compose with `docker-compose --version`.
    Your output should be similar to this:
    ![Docker verification output](/img/Setup/docker-compose-output.png)

## Next

Move to [step 2](#) which sets up Chaos Genius.
