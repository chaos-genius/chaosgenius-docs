---
sidebar_position: 4
id: 'interpreting-anomaly-results'
---

# Interpreting Anomaly Detection Results

On the Dashboard, make sure to **select the "Anomalies"** tab. Then **select the desired KPI** from the list of configured KPIs on the left sidebar.

![Anomaly Detection Results](/img/kpi-and-dashboard/anomaly-dashboard-overview.png)

In this example, the selected KPI is "Total Sales," which was set up as the sum aggregation for the `ItemTotalPrice` column of our table.

Now let's dive into our Anomaly Detection results!

## Overall KPI Charts

At the top of your results, a Time Series plot is displayed where each point displays the KPI value for the input time frequency. In this case, a daily frequency is used; this graph shows the **sum of `ItemTotalPrice` each day**.

![Overall KPI Anomaly Chart](/img/kpi-and-dashboard/anomaly-overall-kpi-chart.png)

**Notice**:

- The graph is color coded: the time series is **green inside** our confidence interval, and **red outside**. Red points are anomalies!
- By dragging over any section of the graph, you can zoom into that section.
- As you hover over the graph, points are annotated with the KPI value, and Confidence Interval bounds.

**^ Edit when Severity Score & maybe expected value graph is available.**

## Drill Downs

**Having subdimensional drill downs for your anomaly charts can be crucial. Subdimensional drill downs can give you insight into subdimensions that are acting chaotic.**

In order to view drill downs for an anomalous point, click on the point in the **Overall KPI graph**. This will populate the "Drill Downs" expansion tab with Anomaly Graphs for the subdimensions configured with the KPI. If the expansion tab is closed, click on the tab to expand it and view.

The drill downs will look similar to this:

![Anomaly Drilldowns](/img/kpi-and-dashboard/anomaly-drilldowns.png)

A list of Time series charts are displayed where each graph represents a value for a subdimension. You can scroll down your dashboard and look at each of the Drill Down graphs.

## Data Quality

**In addition to Anomaly detection drill downs, Chaos Genius provides Data Quality monitoring which can help identify where issues with data quality may be present.**

![Data Quality Monitoring](/img/kpi-and-dashboard/data-quality-monitoring.png)

In this example, the high-severity anomaly in the DQ graph for the maximum `ItemTotalPrice` may be worthwile investigating.

Here, you can scroll down your dashboard to view each of the Data Quality charts. Currently, for KPIs aggregated from numerical columns, data quality is performed for the following metrics: **Volume of data, Max of data, Min of data, Mean of data, and Amount Missing**.
