# NJM Server

Node.js GraphQL backend for Next.js Masters course.

## Running in development

- Start dev DB: `docker-compose -f docker-compose-dev.yaml`.
- DB admin panel @ _localhost:8080_, user: _admin_, pass: _password_.
- Start Node in hot reload: `npm run dev`.

## Codegen

- `pnpm codegen` to create/update GraphQL resolvers.
- `pnpm prisma migrate dev` to update migrations.
- `pnpm prisma generate` to spawn prisma client.
- `pnpm ts-node prisma/manage.ts` to manage initial test data. Use `--drop` to clean all existing data.
Use `--seed` to create mock data.

## Deployment

Server deployment using ArgoCD on RKE2 single node Kubernetes cluster.  

Auto deployment workflow:

- PR / push / merge to main.
- CI build of new Docker image (commit SHA based versioning).
- CI automatic update of image tag in Kubernetes manifest - auto-commit to main & skip CI.
- ArgoCD hook triggers cluster update.

All production secrets are encrypted using sealed secrets controller - <https://github.com/bitnami-labs/sealed-secrets>.

Required settings:

```shell
# database
POSTGRES_USER
POSTGRES_PASSWORD

# app
DATABASE_USER
DATABASE_PASS
DATABASE_HOST # as "host:port"
DATABASE_NAME
NODE_ENV # development || production
NODE_PORT # graphql & rest server port, default 8000
```
