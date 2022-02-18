---
sidebar_position: 10
id: 'Facebook Marketing'
---

:::info

This data source requires the third-party version of Chaos Genius.
Please [install the third-party version](/Quick_Start/install.md#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).

:::

:::info

This data source is not enabled by default in the third-party version. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable it.

:::

Chaos Genius uses Airbyte's [Facebook Marketing](https://docs.airbyte.io/integrations/sources/facebook-marketing) to sync the following core Streams:

-   AdSets.[Facebook docs](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign#fields)

-   Ads.[Facebook docs](https://developers.facebook.com/docs/marketing-api/reference/adgroup#fields)

-   AdCreatives.[Facebook docs](https://developers.facebook.com/docs/marketing-api/reference/ad-creative#fields)

-   Campaigns.[Facebook docs](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-group#fields)

In addition, this source is capable of syncing ad insights as a stream. Ad insights can also be segmented by the following categories, where each segment is synced as a separate stream:

-   Country

-   DMA (Designated Market Area)

-   Gender & Age

-   Platform & Device

-   Region

The segmented streams contain entries of campaign/adset/ad combinations for each day broken down by the chosen segment.

For more information, see the [Facebook Insights API documentation.](https://developers.facebook.com/docs/marketing-api/reference/adgroup/insights/)

To connect Facebook Marketing as a data source, you will need the following information:

-   Access Token

-   Account ID

-   Insights Days Per Job

-   Insights Lookback Window

-   Start Date for syncing data

![FB Marketing](/img/connecting-to-data-sources/fbmarketing.png)

To setup Facebook Marketing, follow these steps:

1.  Follow the [Facebook documentation for obtaining your Ad Account ID](https://www.facebook.com/business/help/1492627900875762) and keep that on hand. We'll need this ID to configure Facebook as a data source.

2.  Next select your App and from the App's Dashboard screen enable the Marketing API for your app if it is not already set up.

3.  In the App Dashboard screen, click Marketing API --> Tools on the left sidebar. Then highlight all the available token permissions (ads_management, ads_read, read_insights) and click "Get token". A long string of characters should appear in front of you; this is the access token.
