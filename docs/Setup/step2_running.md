---
sidebar_position: 2
id: 'Step-2-Running'
---

# Step 2: Running Chaos Genius

## Clone Chaos Genius

1. Clone the repository  
    ```git clone https://github.com/chaos-genius/chaos_genius```
2. Move into the repository:  
    ```cd chaos_genius```

## Start the Containers

1. Bring containers to life with:  
    ```sudo docker-compose up```  

    Or you can use the detached mode, which is preferable on servers as it allows the containers to run in the background.  
    ```sudo docker-compose up -d```
2. To view real time logs run:  
    ```sudo docker-compose logs -f```

## Access the Dashboard

Once you see the Chaos Genius success banner, the UI is ready to be accessed at `<Public IP>:8080`. 

Your public IP would be `localhost` or `127.0.0.1` if you are running on your local system. For a server deployment, check your dashboard for your machine’s public IP.
