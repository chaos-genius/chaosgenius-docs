---
sidebar_position: 4
id: 'sentry_logging'
---

# Sentry Logging

To help us debug and classify errors, you can opt-in to send us error messages with Sentry. In the `.env` file, set `SENTRY_DSN` to the following value to enable collection of errors.

```
SENTRY_DSN=”https://1277bfd9f36d41a48a99aebe74f5807d@o1056684.ingest.sentry.io/6043029”
```

Save the file and restart Chaos Genius:

```
docker-compose stop
docker-compose up
```
