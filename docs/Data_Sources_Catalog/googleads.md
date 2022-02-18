---
sidebar_position: 11
id: 'Google Ads'
---

:::info

This data source requires the third-party version of Chaos Genius.
Please [install the third-party version](/Quick_Start/install.md#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).

:::

:::info

This data source is not enabled by default in the third-party version. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable it.

:::

Chaos Genius uses [Airbyte's Google Ads connector](https://docs.airbyte.io/integrations/sources/google-ads) to sync the following core Streams:

Main streams:

-   [accounts](https://developers.google.com/google-ads/api/fields/v8/customer)

-   [ad_group_ads](https://developers.google.com/google-ads/api/fields/v8/ad_group_ad)

-   [ad_groups](https://developers.google.com/google-ads/api/fields/v8/ad_group)

-   [campaigns](https://developers.google.com/google-ads/api/fields/v8/campaign)

Report streams

-   [account_performance_report](https://developers.google.com/google-ads/api/docs/migration/mapping#account_performance)

-   [ad_group_ad_report](https://developers.google.com/google-ads/api/docs/migration/mapping#ad_performance)

-   [display_keyword_report](https://developers.google.com/google-ads/api/docs/migration/mapping#display_keyword_performance)

-   [display_topics_report](https://developers.google.com/google-ads/api/docs/migration/mapping#display_topics_performance)

-   [shopping_performance_report](https://developers.google.com/google-ads/api/docs/migration/mapping#shopping_performance)

To connect Google Ads as a data source, you will need a Google Ads Account with an approved Developer Token (note: In order to get API access to Google Ads, you must have a "manager" account. This must be created separately from your standard account. You can find more information about this distinction in the[  google ads docs](https://ads.google.com/home/tools/manager-accounts/).)

-   client_id

-   client_secret

-   developer_token

-   refresh_token

-   customer_id

-   start_date

-   login_customer_id (you can find more information about this field in[Google Ads docs](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid))

![Google Ads](/img/connecting-to-data-sources/googleads.png)

To get the required information, it is best to follow [Airbyte's getting started section for Google Ads](https://docs.airbyte.io/integrations/sources/google-ads#getting-started-airbyte-open-source).
