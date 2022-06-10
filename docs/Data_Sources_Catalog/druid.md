---
sidebar_position: 5
id: 'druid'
---

# Druid

:::info

- Current usecase for <strong>Druid</strong> is with <strong>Roll-up</strong> enabled only.
- Supports only `COUNT` and `SUM` aggregation. We have future plans for `MEAN` and `UNIQUE`.
- Druid based KPIs require name for the <strong>Count Column</strong> for the rolled-up data (this column can also be proxy for count for the rolled-up data i.e. not representing the actual count), this is a configurable parameter and can be set in KPI definition while adding/editing a KPI.

:::


## Connecting Druid

To connect a Druid database as a data source, you will need the following information:

* **User**: Username of user with access to database.
* **Password**: Password of the user.
* **Database Host**:
    * For Localhost: localhost or 127.0.0.1
    * For External DB: The public IP of the server 
* **Port**: Port number for Druid console/router, Default is 8888. See [`druid.plaintextPort`](https://druid.apache.org/docs/latest/configuration/index.html#router)



<img alt="Options For Druid" src="/img/connecting-to-data-sources/druid.png" width="500" />


## Supported Authentications

- **Anonymous** : Leave out `User` and `Password` empty if no authentication has been setup.
- **Basic Auth** : Input `User` and `Password` if Basic Auth is enabled.


