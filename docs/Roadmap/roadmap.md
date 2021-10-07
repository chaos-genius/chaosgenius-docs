---
sidebar_position: 1
id: 'Roadmap'
---

Our goal is to be production ready for all companies irrespective of their data infrasatrcture and scale requirements. With that in mind we have created the following roadmap for ourselves. If you see something missing or wish to make suggestions, please drop us a line on our community Slack or raise an issue. 

## Coming soon

### Features
These are main features that we enable soon

-   Anomaly detection

    -   Investigate Anomaly List View

    -   Sub-Dimensional Anomaly Detection & Alerting

    -   Anomaly Detection for KPIs w/o any Dimensions

-   API/Code level configuration for

    -   Hyperparameters for any algorithms

    -   Subpopulation calculation logic 

-   Alerts

    -   Backoff for alerting to minimize repeated alerts

### New Connectors 

We will enabling the following new connectors very soon:

-   Redshift

-   Paypal

-   CSV

-   Salesforce

-   Google Analytics Custom Report

### Performance Enhancements

We are working on following to improve & support data at larger scale

-   Data ingestion

    -   Materialized views support across dataware houses for large scale processing

    -   OLAP cube support 

-   Data processing

    -   Distributed Sub-Dimensional Anomaly Detection

    -   Higher level of sub population support 

-   Robustness

    -   More Robust & Fault Tolerant Task Scheduler

    -   Robust Error Messages & Logs that aid in debugging

## Coming in 6-12 weeks

### Features

These are main features that we enable over the next quarter

-   AutoRCA

       -   Correlation with other KPIs

       -   Correlation with events

-   API Access 

       -   KPI Import from BI Tools/dbt

       -   Metabase 

       -   Superset

       -   Looker

       -   dbt

-   Anomaly Detection

       -   Run Frequency - Hourly; Currently 1 day. 

       -   Edit Anomaly Detection Settings for KPIs

-   Alerts

       -   Alert Feedback

-   Data quality (DQ)

       -   Integration with Great Expectations to import DQ metrics

       -   Deeper DQ metrics with focus on data distribution

-   KPI Definition Catalog

       -   Single data source

       -   Multi data source

-   Forecast as input for DeepDrills

-   K8 configuration for horizontal scaling

### Connectors

We will enabling the following new connectors:

-   S3

-   Data lake support including Delta Lake

-   Google Playstore

-   RPA based connectors platform

### Performance Enhancements

We are working on following to improve & support data at larger scale:

-   Data scalability 

       -   Distributed Pandas support - Koalas, Dask

       -   Compressed Data/ Metrics Store (longer term)

-   Interactive analysis at scale

       -   Implementation of Pinot & Druid based data store to enable interactive analysis 

-   ML scalability

       -   Model warm start where possible for heavier models

       -   Feature & model store
