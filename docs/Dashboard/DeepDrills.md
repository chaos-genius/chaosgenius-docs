---
sidebar_position: 4
id: 'DeepDrills'
---

# DeepDrills

### KPI Overview

Once you've selected the KPI you want to view, your results will look similar like this:

![DeepDrills Results](/img/kpi-and-dashboard/DeepDrills.png)

The KPI in this example is `Uber Rides` When creating this KPI, it was set up to be a `Sum` aggregation of the `num_rides` column.

Let's take a deeper look at these results!

At the top, you'll see a summary of your KPI column represented with Panel Metrics and a Time Series plot.

## Panel Metrics

![Panel Metrics](/img/kpi-and-dashboard/panel_metrics.png)

Chaos Genius produces panel metrics from the KPI column to display how the KPI column across various metrics has changed between our two groups of data. For example, here, the total rides were 741874 Last Month, and 775337 This Month. Between Last month and This Month, the KPI `Uber Rides` increased by 33463!

In addition to the KPI value, you can also see related statistics like Mean, Count, Median, Max and Min to check the data distribution.

## Time Series Plot

**Insert Image**

Chaos Genius will also produce a helpful time series plot to graphically display your selected KPI over the selected time range.

## Changing the time range

![Change Analysis time range](/img/kpi-and-dashboard/change_time_range.png)

Using the Time range dropdown, you can either select to compare groups in a Month-on-Month Week-on-Week or Day-on-Day intervals.

## Single Dimensional Waterfall

Just under the Panel Metrics and Time Series, you can view the waterfall plot. The waterfall plot shows the most impactful subgroups and their impacts on the KPI metric.

You can use the dropdown to select the Single Dimensional analysis. Then use the tabs to select a sub-dimension.

**Insert Image**

Notice that all subgroups are values of the selected sub-dimension. For the selected single dimension, you can see how specific values of a sub-dimension affect the KPI.

Below the waterfall charts, you can view the impact of each value of the selected sub-dimension. For example, we can see the overall impact of DayOfWeek = Friday. By clicking the expansion arrow next to a single dimensional subgroup, you can perform Drill-Downs and also view a breakdown of all the multidimensional subgroups that compose this subgroup.

By default subgroups are sorted by their absolute impact.

## Multi-Dimensional Waterfall

You can use the dropdown to select the Multi-Dimensional analysis. The Multi-Dimensional waterfall has the advantage over single dimensional waterfall due to the fact that it compares all subgroups to find the most impactful ones instead of being limited by a single dimension. The downside is that it is computationally more expensive due to overlap calculations.

Each tile in the waterfall represents a subgroup (a combination of 1 or more sub-dimension values that exists in the dataset). The start and end tiles are for the KPI value in the selected time range groups (Month on Month or Week on Week or Day on Day), respectively. In this example, start is the Uber Rides for Last Month, while end is the Uber Rides for This Month.

The "others" tile represents the sum of impacts from all other not-shown subgroups which each individually, had a minimal impact.

**Insert Image**

Below the waterfall charts, a table of the "Top Drivers" subgroups is displayed along with calculations for aggregations comparing the previous to current month. By default, subgroups are sorted by their absolute impact.

**Insert Image**


Subgroups could overlap when they have a value for a dimension in common. For example, DayOfWeek = Thursday would overlap with DayOfWeek = Thursday & PeriodofDay = Night as any datum in the latter subgroup would also be included in the former subgroup.

With Chaos Genius, you can look at the calculated non-overlap impact by toggling the "Remove Overlap" switch.
