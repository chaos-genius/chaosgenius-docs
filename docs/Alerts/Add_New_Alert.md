---
sidebar_position: 2
id: 'Add New Alert'
---

At present we offer only KPI related anomaly alerts. Event Alerts are going to be added soon.

![Alert Type](/img/Alerts/alerttype.png)

Once you've configured the channel, you can start setting up alerts for the chosen KPIs.

You need to fill in the following fields:

-   **Select KPI** : Select the KPI for which you want to set up the alert

-   **Name of your Alert** : Provide a name for the alert

-   **Alert Type**: Currently, you can only setup alerts for Anomaly Detection for a KPI.

-   **Severity Score**: You can select the Severity Score threshold above which you'll be sent an alert. If your data point is an anomaly and has a severity score 
    greater than your threshold, an alert will be sent.

-   **Alert Frequency**: How frequently will the alert be sent. Currently we offer Daily Alerts.

-   **Message Body**: This is the message you want accompanied when the alert is sent to you.

-   **Select Channel**: Channel on which you want to receive the alert at. Currently you can choose between either :

    -   Email : You can add recipients as a comma separated list of emails.

    -   Slack: You can select the channel to which the alert will be triggered.

![Alert Type](/img/Alerts/alertsconfig.png)
