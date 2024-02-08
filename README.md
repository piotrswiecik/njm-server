# NJM Server

Node.js GraphQL backend for Next.js Masters course.

## Running in development

- Start dev DB: `docker-compose -f docker-compose-dev.yaml`.
- DB admin panel @ _localhost:8080_, user: _admin_, pass: _password_.
- Start Node in hot reload: `npm run dev`.

## Codegen

- `pnpm codegen` to create/update GraphQL resolvers.

## Deployment

Server deployment using ArgoCD on RKE2 single node Kubernetes cluster.
All production secrets are encrypted using sealed secrets controller - <https://github.com/bitnami-labs/sealed-secrets>.

Required settings:

```shell
# database
POSTGRES_USER
POSTGRES_PASSWORD

# app
DATABASE_USER
DATABASE_PASS
NODE_ENV # development || production
NODE_PORT # graphql & rest server port, default 8000
```
