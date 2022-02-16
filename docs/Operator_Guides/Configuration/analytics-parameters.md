---
sidebar_position: 2
id: 'analytics-parameters'
---

# Analytics Parameters

## Posthog

Posthog Telemetry is enabled by default. It can be disabled by setting the following in the `.env` file:

```
REACT_APP_DISABLE_TELEMETRY=true
```

## Sentry

To help us debug and classify errors, you can opt-in to send us error messages with Sentry. Error collection using sentry is disabled by default. 

In the `.env` file, set `SENTRY_DSN` to the following value to enable collection of errors.

```
SENTRY_DSN=”https://1277bfd9f36d41a48a99aebe74f5807d@o1056684.ingest.sentry.io/6043029”
```

Save the file and restart Chaos Genius:

```
docker-compose stop
docker-compose up
```
