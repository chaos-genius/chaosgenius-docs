---
sidebar_position: 6
id: 'step4_add_alert'
---
# Step 4: Set-Up Alerts (Optional)

## Configuring Alert Destination

Before adding an alert, you need to setup an alert destination. Currently we offer Slack and Email as Alert Channels. Please see the 
[Alerts](/Alerts/Alert_Destination.md) section for more information.

![Alert Channel](/img/Alerts/alertschannel.png)

Once you've configured the channel, you can start setting up alerts for the chosen KPIs.

## Setting up Alerts

To setup an Alert, you first have to click the `New Alert` button, select `KPI Alert` and then fill in the following fields:

-   **Select KPI** : Select the KPI for which you want to set up the alert

-   **Name of your Alert** : Provide a name for the alert

-   **Alert Type**: Currently, you can only setup alerts for Anomaly Detection for a KPI. 

-   **Severity Score**: You can select the Severity Score threshold above which you'll be sent an alert. If your data point is an anomaly and has a severity score greater than your threshold, an alert will be sent.

-   **Alert Frequency**: How frequently will the alert be sent. Currently we offer Daily Alerts.

-   **Message Body**: This is the message you want accompanied when the alert is sent to you.

-   **Select Channel**: Channel on which you want to receive the alert at. Currently you can choose between either :

    -   Email : You can add recipient emails. Press enter after typing an email to add it to the list.

    -   Slack: You can select the channel to which the alert will be triggered.

-  **Send as**: Here you can select whether you want alerts to be sent individually (as soon as anomaly is computed) or as a **daily consolidated report** once a day at the configured time.

:::note
Consolidated [Reports need to be configured](/Alerts/Alert_Report_Settings.md) to receive them.
:::

For more information on setting up alerts, please visit the [Alerts](/Alerts/Alert_Destination.md) section.

![Add KPI alert](/img/Alerts/add_alert_1.png)

![Add KPI alert - channel config](/img/Alerts/add_alert_2.png)

## Alerts Dashboard

The dashboard shows all of the alerts triggered in the past week.

You can navigate to the alerts dashboard by clicking on the `Alerts` heading on the alerts page, or by navigating to `<your-ip-or-hostname>/api/digest` (for local installs, this will be [http://localhost:8080/api/digest](http://localhost:8080/api/digest)).

![Alerts Dashboard](/img/Alerts/alerts_dashboard.png)


