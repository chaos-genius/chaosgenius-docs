---
sidebar_position: 5
id: 'interpreting-anomaly-results'
---

# Anomaly Detection

In order to run Anomaly Detection on the selected KPI, you need to configure in Anomaly Detector settings either during the **Activate Analytics** step during the Chaos Genius setup or by navigating via the Dashboard to the selected KPI and selecting **Anomaly** analysis tab. 

## Anomaly Detector Settings

![Anomaly_Detector](/img/kpi-and-dashboard/anomaly_detector_settings.png)

There are multiple parameters that you can tune to configure the Anomaly Detection analytics for selected KPI. 

### Time Window

Time Window is the historical data points which will be used to train the selected model on your data to learn about the trends, seasonality and patterns for the selected KPI. If you choose a time window of 90 days with daily frequency data, past 90 days of data will be examined and if you have hourly data, 90 previous hours will be utilized. 
Disclaimer: If the window size is greater than the data availbable, anomaly detection won't run. We are currently working on resolving this issue.

### Model Frequency

This is the frequency at which Chaos Genius will run Anomaly Detection. For the current version of Chaos Genius, it is set to Daily. This means, Chaos Genius will run Anomaly Detection once a day at a specified time.

### Select A Model

Here you will select which model will be used to run anomaly detection. You can find a list of available models and their use cases is the Anomaly Detection Algorithms section below.

### Sensitivity

Sensitivity is a measure of the model's response to anomalous data points. A higher sensitivity will lead to even small changes being detected as anomalies and whereas lower sensitivity will only generate anomalies on larger changes.

### Time Series Frequency

This input is for the model to understand the frequency of the incoming data. If you have data points coming in once a day, set it to daily or if you have data points coming once a hour, then set it to hourly.

### Schedule

The time at which to run anomaly detection daily.

### Expected Seasonality in Data

Here we ask for what kind of seasonality is expected in the data as it can help our models be more accurate but you can still leave these boxes empty if you are not sure.


## Anomaly Detection Algorithms

Chaos Genius offers multiple algorithms that can be selected for different KPIs based on the use-case and expected noise in the data in order to minimize false positives and alert fatigue. 

### Standard Deviation (SD)

The Standard Deviation model forecasts time series prediction as the standard deviation of the past values.  The model should be utilized when your data does not have any significant seasonality. It is also recommended to use the algorithm when you have a large number of metrics to keep track of and you want to save on compute power.

### Exponentially Weighted Standard Deviation (EWSTD)

The EWSTD model is a simple extension to the SD model (which assigns equal weight to every point in time), by assigning more weight to the most recent observations using an exponential scheme. It handles trends & recent variation in data better as compared to the Standard Deviation Model.

### Prophet

Prophet is an open source software released by Facebook. It is a time series forecasting technique based on an additive model that fits non-linear trends with yearly, weekly, and daily seasonality, as well as holiday effects. It's robust to missing data and trend changes, and it usually handles outliers well. Additional details regarding the model are available [here](https://research.fb.com/prophet-forecasting-at-scale/).

### NeuralProphet (Beta - Available on Request)

NeuralProphet retains all the advantages of Facebook's Prophet model, while improving its accuracy, speed and scalability by introducing an improved backend (PyTorch instead of Stan) and using an Auto-Regressive Network (that combines the scalability of neural networks with the interpretability of the Auto-Regressinve models).  A more detailed explanation of the model can be found [here](https://neuralprophet.com/model-overview/).  

**This model is currently in Beta.**

### Greykite (Beta - Available on Request)

Greykite is an open source package that was created to serve LinkedIn's forecasting needs. Greykite offers two forecasting models: Prophet and Silverkite. Silverkite, the company's core forecasting algorithm, is quick, accurate, and intuitive, making it ideal for interactive and automated forecasting at scale. If you prefer Bayesian models and need logistic growth with changing capacity over time, choose Prophet. Else if speed is important and if you want to forecast a quantile, select Silverkite. A complete list of details are provided [here](https://linkedin.github.io/greykite/docs/0.1.0/html/pages/stepbystep/0100_choose_model.html). 

**This model is currently in Beta.**

### Error Trend Seasonality (Experimental)

The ETS model is designed to forecast time series data by observing the trend and seasonality patterns in a time series. An ETS model has three main components: error, trend, and seasonality. Each can be applied either additively, multiplicatively, or none chosen at all. This model is available in the current version of Chaos Genius but still being tested.


## Analysing Anomaly Detection

On the Dashboard, make sure to **select the "Anomaly"** tab. Then **select the desired KPI** from the list of configured KPIs on the left sidebar.

![Anomaly Detection Results](/img/kpi-and-dashboard/anomaly_dashboard_overview.png)

In this example, the selected KPI is "Total Sales," which was set up as the sum aggregation for the `ItemTotalPrice` column of our table.

Now let's dive into our Anomaly Detection results!

### Overall KPI Anomaly Chart

At the top of your results, a Time Series plot is displayed where each point displays the KPI value for the input time frequency. In this case, a daily frequency is used; this graph shows the **sum of `ItemTotalPrice` each day**.

![Overall KPI Anomaly Chart](/img/kpi-and-dashboard/overall_KPI_anomaly_chart.png)

Notice:

-   The graph is color coded: the time series is green inside our confidence interval, and red outside. Red points are anomalies!

-   By dragging over any section of the graph, you can zoom into that section.

-   As you hover over the graph, points are annotated with the KPI value, and Confidence Interval bounds, Severity Score of the Anomaly & the Datetime.

### Drill Downs

**Having subdimensional drill downs for your anomaly charts can be crucial. Subdimensional drill downs can give you insight into subdimensions that are acting chaotic.**

In order to view drill downs for an anomalous point, click on the point in the **Overall KPI graph**. This will populate the "Drill Downs" expansion tab with Anomaly Graphs for the subdimensions configured with the KPI. If the expansion tab is closed, click on the tab to expand it and view.

The drill downs will look similar to this:

![Anomaly Drilldowns](/img/kpi-and-dashboard/anomaly-drilldowns.png)

A list of Time series charts are displayed where each graph represents a value for a subdimension. You can scroll down your dashboard and look at each of the Drill Down graphs.

### Data Quality

**In addition to Anomaly detection drill downs, Chaos Genius provides Data Quality monitoring which can help identify where issues with data quality may be present.**

![Data Quality Monitoring](/img/kpi-and-dashboard/data-quality-monitoring.png)

In this example, the high-severity anomaly in the DQ graph for the maximum `ItemTotalPrice` may be worthwile investigating.

Here, you can scroll down your dashboard to view each of the Data Quality charts. Currently, for KPIs aggregated from numerical columns, data quality is performed for numerous metrics:

- Volume: Number of rows in the data.
- Max: Max value of the KPI data.
- Mean: Mean of the KPI data.
- Missing: Number of missing rows of the KPI.
