---
sidebar_position: 5
id: 'google-analytics'
---

# Google Analytics

To connect Google Analytics as a data source, you will need the following information:

* **Credentials JSON**
    * Credentials for the Service Account linked to the Google Analytics View.
* **Start Date**
    * No data before this date will be processed. Formatted as YYYY-MM-DDT00:00:00Z. <br/>(ie. 2021-07-20T00:00:00Z)
* **View ID**
    * The ID of the Google Analytics View you want to get data from. Can be found using [Google Analytics Account Explorer](https://ga-dev-tools.appspot.com/account-explorer/).
* **Custom Reports (Optional)**

<img alt="Options For Google Analytics" src="/img/connecting-to-data-sources/google-analytics.png" width="500" />

### Getting the Credentials JSON

#### Creating a Service Account

1. Log into the Google Account that has Administrator permissions on Google Analytics.
2. Go to the [Service Account page](https://console.developers.google.com/iam-admin/serviceaccounts) and click "Create service account".
3. Add a JSON key for new Service Account and copy the contents of the downloaded JSON file into the "Credentials JSON" field.

#### Giving Service Account access to Google Analytics

1. Copy the Service Account email address.
2. Go to Google Analytics and [add a user](https://support.google.com/analytics/answer/1009702) with the copied email address. This new user needs "Read & Analyze" permissions.

#### Enabling the APIs

1. Go to [Google Console](https://console.cloud.google.com/).
2. In the search box at the top, enter "Google Analytics Reporting API". Click the first option and then press "Enable". 
3. Repeat Step 2 but for "Google Analytics API".

### Using Custom Reports

This does exactly what Google Analytics's Custom Reports feature does. To use it, input a JSON object in the "Custom Reports" field. The format for a custom report is:
```json
{"name": string, "dimensions": [string], "metrics": [string]}
```
An example for the "Custom Reports" field:
```json
[{"name": "new_users_per_day", "dimensions": ["ga:date","ga:country","ga:region"], "metrics": ["ga:newUsers"]}, {"name": "users_per_city", "dimensions": ["ga:city"], "metrics": ["ga:users"]}]
```

For the "dimensions" and "metrics" field, you can use any of the default Google Analytics ones listed below, or custom ones if you have them defined. A report cannot contain more than 7 dimensions and 10 metrics, and all need to be unique. <br/>

Default Google Analytics "dimensions":
* ga:browser
* ga:city
* ga:continent
* ga:country
* ga:date
* ga:deviceCategory
* ga:hostname
* ga:medium
* ga:metro
* ga:operatingSystem
* ga:pagePath
* ga:region
* ga:socialNetwork
* ga:source
* ga:subContinent


Default Google Analytics "metrics":
* ga:14dayUsers
* ga:1dayUsers
* ga:28dayUsers
* ga:30dayUsers
* ga:7dayUsers
* ga:avgSessionDuration
* ga:avgTimeOnPage
* ga:bounceRate
* ga:entranceRate
* ga:entrances
* ga:exitRate
* ga:exits
* ga:newUsers
* ga:pageviews
* ga:pageviewsPerSession
* ga:sessions
* ga:sessionsPerUser
* ga:uniquePageviews
* ga:users