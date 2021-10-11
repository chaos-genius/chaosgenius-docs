---
sidebar_position: 3
id: 'bigquery'
---

# BigQuery

To connect BigQuery as a data source, you will need the following information:

-   Credentials JSON

-   Default Dataset ID

-   Project ID

![BigQuery](/img/connecting-to-data-sources/bigquery.png)


To sync data from BigQuery, Chaos Genius needs a Service Account with the "BigQuery User" and "BigQuery Data Editor" roles. To setup this service account please look at [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts). You can then refer to [this link](https://cloud.google.com/iam/docs/granting-changing-revoking-access#granting-console) to grant access to this service account.

You can follow [Creating and Managing Service Account Keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) to generate the required credentials. Once all of this is setup and you have your credentials JSON with requisite permissions, simply enter your credentials, default dataset ID and project ID to get started.
