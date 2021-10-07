---
sidebar_position: 8
id: 'Stripe'
---
Chaos Genius uses Airbyte's [Stripe Connector](https://docs.airbyte.io/integrations/sources/stripe) to sync the following core Streams:

-   [Balance Transactions](https://stripe.com/docs/api/balance_transactions/list) (Incremental)

-   [Bank accounts](https://stripe.com/docs/api/customer_bank_accounts/list)

-   [Charges](https://stripe.com/docs/api/charges/list) (Incremental)

-   [Coupons](https://stripe.com/docs/api/coupons/list) (Incremental)

-   [Customer Balance Transactions](https://stripe.com/docs/api/customer_balance_transactions/list)

-   [Customers](https://stripe.com/docs/api/customers/list) (Incremental)

-   [Disputes](https://stripe.com/docs/api/disputes/list) (Incremental)

-   [Events](https://stripe.com/docs/api/events/list) (Incremental)

-   [Invoice Items](https://stripe.com/docs/api/invoiceitems/list) (Incremental)

-   [Invoice Line Items](https://stripe.com/docs/api/invoices/invoice_lines)

-   [Invoices](https://stripe.com/docs/api/invoices/list) (Incremental)

-   [PaymentIntents](https://stripe.com/docs/api/payment_intents/list) (Incremental)

-   [Payouts](https://stripe.com/docs/api/payouts/list) (Incremental)

-   [Plans](https://stripe.com/docs/api/plans/list) (Incremental)

-   [Products](https://stripe.com/docs/api/products/list) (Incremental)

-   [Refunds](https://stripe.com/docs/api/refunds/list) (Incremental)

-   [Subscription Items](https://stripe.com/docs/api/subscription_items/list)

-   [Subscriptions](https://stripe.com/docs/api/subscriptions/list) (Incremental)

-   [Transfers](https://stripe.com/docs/api/transfers/list) (Incremental)

To connect Stripe as a data source, you will need the following information:

-   Account ID

-   Client Secret

-   Start Date for syncing

![Stripe](/img/connecting-to-data-sources/stripe.png)

Visit the[  Stripe API Keys page](https://dashboard.stripe.com/apikeys) in the Stripe dashboard to access the secret key for your account. Secret keys for the live Stripe environment will be prefixed with sk_live_or rk_live.

Visit the Airbyte page for more detailed information [here](https://docs.airbyte.io/integrations/sources/stripe).
