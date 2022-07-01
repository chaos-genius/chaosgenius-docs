---
sidebar_position: 8
id: 'google-sheets'
---

# Google Sheets

:::info

This data source requires the third-party version of Chaos Genius.
Please [install the third-party version](/Quick_Start/install.md#third-party-installation) or [upgrade to it](/Operator_Guides/upgrading_cg.md#from-the-default-installation-to-third-party-installation).

:::

To connect Google Sheets as a data source, you will need the following information:

* **Credentials JSON**
    * Credentials for the Service Account linked to the Google Sheets document.
* **Spreadsheet ID**
    * The ID of the Google Sheet to connect to.<br/>
    For example, if the URL for the Google Sheet is https://docs.google.com/spreadsheets/d/1ZV8j3TatU3EvhdlYU8xKFoY9OgEspznDicQA99igV5c/edit, the ID is `1ZV8j3TatU3EvhdlYU8xKFoY9OgEspznDicQA99igV5c`.
    
<img alt="Options For Google Sheets" src="/img/connecting-to-data-sources/google-sheets.png" width="500" />


## Getting the Credentials JSON

### Creating a Service Account

1. Log into a Google Account (Does not need to be the same one which owns the Google Sheet).
2. Go to the [Service Account page](https://console.developers.google.com/iam-admin/serviceaccounts) and click "Create service account".
3. Add a JSON key for new Service Account and copy the contents of the downloaded JSON file into the "Credentials JSON" field.

### Enabling the APIs

1. Go to [Google Console](https://console.cloud.google.com/).
2. In the search box at the top, enter "Google Sheets API". Click the first option and then press "Enable". 
3. Repeat Step 2 but for "Google Drive API".

### Give Service Account access to Google Sheet

1. Open the Google Sheet from a Google Account with sharing permissions.
2. Share the document with the email address of the Service Account. Email address can be found [here](https://console.developers.google.com/iam-admin/serviceaccounts)


Chaos Genius uses Airbyte to sync data from Google Sheets. Refer to [their docs here](https://docs.airbyte.io/integrations/sources/google-sheets) for a detailed description along with caveats.

Note: Sheet names and column headers must contain only alphanumeric characters or _, as specified in the  Airbyte Protocol. If your sheet or column header is named e.g: "the data", you'll need to change it to "the_data" for it to be synced by Airbyte. This restriction does not apply to non-header cell values: those can contain any unicode characters. This limitation is temporary and future versions of Airbyte will support more permissive naming patterns.
