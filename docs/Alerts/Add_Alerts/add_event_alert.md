---
sidebar_position: 3
id: 'event-alert'
---

# Event Alerts

![Add Event alert](/img/Alerts/add_event_alert.png)
![Add Event alert - channel config](/img/Alerts/add_event_alert_2.png)

You need to fill in the following fields:

-   **Name of your Alert**: Provide a name for the alert.

-   **Select Data Source**: Data Source you will be using to define the event.

-   **Query**: Define the query used to fetch the data.

-   **Alert Frequency**: How frequently will the alert be sent. We offer Daily or Hourly Alerts.

-   **Alert Settings**: 
    
    - **New Entry**: This option will send an alert if any new entries are added to the data.
    
    - **All changes**: This option will alert if there is any change to your data (addition or deletion).
    
    - **Always Send**: Sends data from the query on every run. 
    
    - **Missing**: Sends alerts if you have any missing data.

-   **Message Body**: This is the message you want accompanied when the alert is sent to you.

-   **Select Channel**: Channel on which you want to receive the alert at. Currently you can choose between either :

    -   Email: You can add recipient emails. Press enter after typing an email to add it to the list.

    -   Slack: You can select the channel to which the alert will be triggered.

