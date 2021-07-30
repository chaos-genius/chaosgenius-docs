---
sidebar_position: 4
id: 'interpreting-rca-results'
---

# Interpreting AutoRCA results

Once you've selected the KPI you want to view, your results will look similar like this:

![RCA Results](/img/kpi-and-dashboard/rca-dashboard.png)

The KPI in this example is "E-com - Total Sales." When creating this KPI, it was set up to be a sum aggregation of the \`ItemTotalPrice\` column.

Let's take a deeper look at these results!

## KPI Statistics

At the top, you'll see a summary of your KPI column represented with Panel Metrics and a Time Series plot.

![Panel Metrics and Time Series plot](/img/kpi-and-dashboard/panel-metrics-and-time-series.png)

### Changing the RCA time range

![Change RCA time range](/img/kpi-and-dashboard/change-time-range.png)

Using the Time range dropdown, you can either select to compare groups in a Month-on-Month or a Week-on-Week fashion.

### Panel Metrics

![Panel Metrics](/img/kpi-and-dashboard/panel-metrics.png)

Chaos Genius produces panel metrics from the KPI column to display how the KPI column across various metrics has changed between our two groups of data. For example, here, the total sales were `23.68` last month, and is `22.47` this month. Between last month and this month, the total sales decreased approximately `-1.21`!

### Time Series plot

![Time Series](/img/kpi-and-dashboard/time-series.png)

Chaos Genius will also produce a helpful time series plot to graphically display your selected KPI over both time ranges. In this example, here, since we are using a sum aggregation, the sum of the ItemTotalPrice column is displayed. We can compare the value for any day of the month to the corresponding day in the previous month.

## RCA Drill Downs (Waterfall Charts)

### Multidimensional Drill Downs

![Multidim Waterfall](/img/kpi-and-dashboard/multidim-waterfall.png)

#### Waterfalls

Just under the Panel Metrics and Time Series, you can view the multidimensional waterfall plot by selecting it in the dimension select dropdown. The waterfall plot shows the **most impactful subgroups** and their impacts on the KPI metric.

Each tile in the waterfall represents a subgroup (a combination of 1 or more subdimension values that exists in the dataset). The start and end tiles are for the KPI value in the baseline and focus groups, respectively. In this example, start is the total sales for **last month**, while end is the total sales for **this month**.

**The "others" tile represents the sum of impacts from all other not-shown subgroups which each individually, had a minimal impact.**

![Top Drivers](/img/kpi-and-dashboard/multidim-top-drivers.png)

#### Top Drivers

Below the waterfall charts, a table of the "Top Drivers" subgroups is displayed along with calculations for aggregations comparing the previous to current month.

By default, subgroups are sorted by their absolute impact; in addition, a custom sort can be applied by clicking on any of the column headers.

![Without Overlap](/img/kpi-and-dashboard/multidim-top-drivers-no-overlap.png)

#### Remove Subgroup overlap

Subgroups could overlap when they have a value for a dimension in common. For example, `DayOfWeek = Thursday` would overlap with `DayOfWeek = Thursday & PurchaseTime = night` as any datum in the latter subgroup, would also be included in the former subgroup.

With Chaos Genius, you can look at the calculated non-overlap impact by toggling the "Remove Overlap" switch.

### Single dimensional Drill Downs

You can use the dropdown to select a Single Dimensional analysis. Then use the tabs to select a subdimension.

![Single Dimensional Waterfall](/img/kpi-and-dashboard/single-dim-waterfall.png)

#### Waterfalls

Notice that all subgroups are values of the selected subdimension. For single dimension RCA, you can see how specific values of a subdimension affect the KPI.

![Impacts](/img/kpi-and-dashboard/single-dim-subgroup-impacts.png)

#### Single dimensional Subgroup Impacts

Below the waterfall charts, you can view the impact of each value of the selected subdimension. For example, we can see the overall impact of `DayOfWeek = Thursday`. By clicking the expansion arrow next to a single dimensional subgroup, we can also view a breakdown of all the multidimensional subgroups that compose this subgroup.

By default subgroups are sorted by their absolute impact; in addition, a custom sort can be applied by clicking on any of the column headers.
