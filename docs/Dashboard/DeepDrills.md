---
sidebar_position: 4
id: 'DeepDrills'
---

# DeepDrills

### KPI Overview

Once you've selected the KPI you want to view, your results will look something like this:

![DeepDrills Results](/img/kpi-and-dashboard/DeepDrills.png)

The KPI in this example is `Lyft Rides` When creating this KPI, it was set up to be a `Sum` aggregation of the `num_rides` column.

At the top, you'll see a summary of your KPI column represented with Summary Panel and a Time Series plot.

## Summary Panel

![Panel Metrics](/img/kpi-and-dashboard/panel_metrics.png)

Chaos Genius produces a Summary Panel of your metrics from the KPI column and places them at the top for quick viewing. You can examine the values for both the current time range and the previous time range. We also provide a comparison between the two time ranges.

For example, here, we've selected our time range to be the Last 30 days. The total rides were 571K in the Previous Period (17th Dec 2021 - 16th Jan 2022) and 608K in the current period (17th Jan 2022 - 16th Feb 2022). You can clearly see that the rides increased by 37.2K which is about 6.52%.

## Time Series Plot

![Time Series Plot](/img/kpi-and-dashboard/time_series.png)

Chaos Genius will also produce a graph of your time series for the last 60 days which allows you to see the performance of your KPI over a period of time.


## Changing the Time Range

![Change Analysis time range](/img/kpi-and-dashboard/change_time_range.png)

Using the Time range dropdown, you can select to compare groups in the time interval that you prefer. 

The time intervals we currently offer are: *Last 30 Days, Last 7 Days, Previous Day, Month on Month, MTD (Month Till Date), Week on Week, WTD (Week Till Date), Quarter on Quarter and QTD (Quarter Till Date)*. 

Quarterly time-cuts are disabled by default. You can set what intervals you want using the `DEEPDRILLS_ENABLED_TIME_RANGES` param in the .env file. For more information please refer to the [Config Param Guide](/Operator_Guides/Configuration/config-params.md).

## Single Dimensional Waterfall

Just under the Summary Panel and Time Series, you can view the waterfall plot. The waterfall plot shows the most impactful subgroups and their impacts on the KPI metric.

You can use the dropdown to select the Single Dimensional analysis. Then use the tabs to select a sub-dimension.

![Single Dimensional Waterfall](/img/kpi-and-dashboard/single_dimensional_waterfall.png)

Notice that all subgroups are values of the selected sub-dimension. For the selected single dimension, you can see how specific values of a sub-dimension affect the KPI.

Below the waterfall charts, you can view the impact of each value of the selected sub-dimension. For example, we can see the overall impact of Name = Lyft XL. By clicking the expansion arrow next to a single dimensional subgroup, you can perform Drill-Downs and also view a breakdown of all the multidimensional subgroups that compose this subgroup.

By default subgroups are sorted by their absolute impact.

![Single Dimensional Drivers](/img/kpi-and-dashboard/single_dimensional_drivers.png)

## Multi-Dimensional Waterfall

You can use the dropdown to select the Multi-Dimensional analysis. The Multi-Dimensional waterfall has the advantage over single dimensional waterfall due to the fact that it compares all subgroups to find the most impactful ones instead of being limited by a single dimension. The downside is that it is computationally more expensive due to overlap calculations.

Each tile in the waterfall represents a subgroup (a combination of 1 or more sub-dimension values that exists in the dataset). The start and end tiles are for the KPI value in the selected time range groups, respectively. In this example, start is the Lyft Rides Rides for Previous Period (17th Dec 2021 - 16th Jan 2022), while end is the Uber Rides for current period (17th Jan 2022 - 16th Feb 2022).

The "others" tile represents the sum of impacts from all other not-shown subgroups which each individually, had a minimal impact.

![Multi Dimensional Waterfall](/img/kpi-and-dashboard/multi_dimensional_waterfall.png)

Below the waterfall charts, a table of the "Top Drivers" subgroups is displayed along with calculations for aggregations comparing the previous to current month. By default, subgroups are sorted by their absolute impact.

![Multi Dimensional Drivers](/img/kpi-and-dashboard/multi_dimensional_drivers.png)


Subgroups could overlap when they have a value for a dimension in common. For example, PeriodOfDay = Morning would overlap with PeriodOfDay = Morning & Distance = (45.68, 261.13] as any datum in the latter subgroup would also be included in the former subgroup.

With Chaos Genius, you can look at the calculated non-overlap impact by toggling the "Remove Overlap" switch.
