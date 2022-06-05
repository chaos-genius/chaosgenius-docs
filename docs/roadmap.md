---
sidebar_position: 14
id: 'Roadmap'
---

Our goal is to make Chaos Genius production ready for all companies irrespective of their data infrasturcture, data sources and scale requirements. With that in mind we have created the following roadmap for Chaos Genius. If you see something missing or wish to make suggestions, please drop us a line on our community Slack or raise an issue. 

## Coming soon

### Features
These are main features that we enable soon

-   Anomaly detection
    -   Hourly anomaly detection
    -   Reasoning & causality for each anomaly 
    -   Data backfilling & model retraining
    -   Sub-Dimension anomaly investigation by size & severity


-   API/Code level configuration for
    -   Hyperparameters for any algorithms
    -   Subpopulation calculation logic 

-   Alerts
    -   Webhook Support
    -   Backoff for alerting to minimize repeated alerts
    -   Custom formatting option for alerts
    -   Specific spike or drop alerts
    

-   Timezone support
    -   Support for DB Timezone and Reporting Timezone
    -   Handle TZ aware data & TZ conversion

-   Login screeen
-   Homepage Revamp
-   Simple Pagination

### New Connectors 

We will enabling the following new connectors very soon:

-   Apache Druid
-   dbt (models & metrics)
-   Paypal
-   CSV
-   Salesforce

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

-   K8 configuration for horizontal scaling


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

-   Alerts
       -   Alert Feedback

-   Data quality (DQ)
       -   Integration with Great Expectations to import DQ metrics
       -   Deeper DQ metrics with focus on data distribution

-   KPI Definition Catalog
       -   Single data source
       -   Multi data source

-   Forecast as input for DeepDrills

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
       -   Compressed Data/ Metrics Store

-   Interactive analysis at scale

-   ML scalability
       -   Model warm start where possible for heavier models
       -   Feature & model store
