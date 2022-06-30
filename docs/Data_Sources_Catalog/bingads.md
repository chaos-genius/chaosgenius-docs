---
sidebar_position: 12
id: 'Bing Ads'
---

:::info

- This data source requires the third-party version of Chaos Genius.
  Please [install the third-party version](/Quick_Start/install.md#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).
- This data source is not enabled by default in the third-party version. Please see [this section](/Operator_Guides/Configuration/config-params.md#enabling-third-party-data-sources) to enable it.

:::

Chaos Genius uses Airbyte's [Bing Ads](https://docs.airbyte.io/integrations/sources/bing-ads) to sync the following core Streams:

-   [Accounts](https://docs.microsoft.com/en-us/advertising/customer-management-service/searchaccounts?view=bingads-13)

-   [Campaigns](https://docs.microsoft.com/en-us/advertising/campaign-management-service/getcampaignsbyaccountid?view=bingads-13)

-   [AdGroups](https://docs.microsoft.com/en-us/advertising/campaign-management-service/getadgroupsbycampaignid?view=bingads-13)

-   [Ads](https://docs.microsoft.com/en-us/advertising/campaign-management-service/getadsbyadgroupid?view=bingads-13)

Supported report streams:

-   [AccountPerformanceReport](https://docs.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13)

-   [AdPerformanceReport](https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13)

-   [AdGroupPerformanceReport](https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13)

-   [CampaignPerformanceReport](https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13)

-   [BudgetSummaryReport](https://docs.microsoft.com/en-us/advertising/reporting-service/budgetsummaryreportrequest?view=bingads-13)

-   [KeywordPerformanceReport](https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13)

To connect Bing Ads as a data source, you will need the following information:

-   Client ID

-   Client Secret

-   Customer ID

-   Developer Token

-   Refresh Token

-   User ID

![Bing_Ads](/img/connecting-to-data-sources/bingads.png)

To setup Bing Ads, [Register Your Application](https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-register?view=bingads-13) in Azure portal and then perform these[  steps](https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-consent?view=bingads-13l) to get your auth code. Use these steps to [get a refresh token](https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-get-tokens?view=bingads-13) using auth code from the previous step.

Now you can fill in the fields from the data gathered during the setup:

-   client_id: Id generated during application registration

-   client_secret: Secret generated during application registration

-   customer_id: Use this[  guide](https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-ids) to get this id

-   developer_token: You can find this token[  here](https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token)

-   refresh_token: Token received during[  auth process](https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth?view=bingads-13)

-   user_id: Sign in to the Microsoft Advertising web application. The URL will contain a uid key/value pair in the query string that identifies your User ID

Be aware that the refresh token will expire in 90 days. You need to repeat the auth process to get a new refresh token.
