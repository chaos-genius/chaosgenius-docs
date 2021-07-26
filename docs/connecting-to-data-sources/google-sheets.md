---
sidebar_position: 4
id: 'Google Sheets'
---

# Google Sheets

To connect Google Sheets as a data source, you will need the following information:

* **Credentials JSON**
    * Credentials for the Service Account linked to the Google Sheets document.
* **Spreadsheet ID**
    * The ID of the Google Sheet to connect to.<br/>
    For example, if the URL for the Google Sheet is https://docs.google.com/spreadsheets/d/1ZV8j3TatU3EvhdlYU8xKFoY9OgEspznDicQA99igV5c/edit, the ID is `1ZV8j3TatU3EvhdlYU8xKFoY9OgEspznDicQA99igV5c`.
    
<img alt="Options For Google Sheets" src="/img/connecting-to-data-sources/google-sheets.png" width="500" />

    
### Getting the Credentials JSON

#### Creating a Service Account

1. Log into a Google Account (Does not need to be the same one which owns the Google Sheet).
2. Go to the [Service Account page](https://console.developers.google.com/iam-admin/serviceaccounts) and click "Create service account".
3. Add a JSON key for new Service Account and copy the contents of the downloaded JSON file into the "Credentials JSON" field.

#### Enabling the APIs

1. Go to [Google Console](https://console.cloud.google.com/).
2. In the search box at the top, enter "Google Sheets API". Click the first option and then press "Enable". 
3. Repeat Step 2 but for "Google Drive API".

#### Give Service Account access to Google Sheet

1. Open the Google Sheet from a Google Account with sharing permissions.
2. Share the document with the email address of the Service Account. Email address can be found [here](https://console.developers.google.com/iam-admin/serviceaccounts)
