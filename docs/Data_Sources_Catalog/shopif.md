---
sidebar_position: 7
id: 'Shopify'
---

Chaos Genius uses Airbyte's [Shopify Connector](https://docs.airbyte.io/integrations/sources/shopify) to sync the following core Streams:

-   [Abandoned Checkouts](https://help.shopify.com/en/api/reference/orders/abandoned_checkouts)

-   [Collects](https://help.shopify.com/en/api/reference/products/collect)

-   [Custom Collections](https://help.shopify.com/en/api/reference/products/customcollection)

-   [Customers](https://help.shopify.com/en/api/reference/customers)

-   [Draft Orders](https://help.shopify.com/en/api/reference/orders/draftorder)

-   [Discount Codes](https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode)

-   [Metafields](https://help.shopify.com/en/api/reference/metafield)

-   [Orders](https://help.shopify.com/en/api/reference/orders)

-   [Orders Refunds](https://shopify.dev/api/admin/rest/reference/orders/refund)

-   [Orders Risks](https://shopify.dev/api/admin/rest/reference/orders/order-risk)

-   [Products](https://help.shopify.com/en/api/reference/products)

-   [Transactions](https://help.shopify.com/en/api/reference/orders/transaction)

-   [Pages](https://help.shopify.com/en/api/reference/online-store/page)

-   [Price Rules](https://help.shopify.com/en/api/reference/discounts/pricerule)

To connect Shopify as a data source, you will need the following information:

-   API Password

-   Shop Name

-   Start Date for syncing

![Shopify](/img/connecting-to-data-sources/shopify.png)

To get your API password or follow these steps:

1.  Go to https://YOURSTORE.myshopify.com/admin/apps/private

2.  Enable private development if it isn't enabled.

3.  Create a private application.

4.  Select the resources you want to allow access to. Airbyte only needs read-level access.

5.  Note: The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource.

6.  The password under the Admin API section is what you'll use as the api_password for the integration.

Visit the Airbyte page for more detailed information [here](https://docs.airbyte.io/integrations/sources/shopify).


