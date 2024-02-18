# NJM Server

Node.js GraphQL backend for Next.js Masters course.

## Running in development

- Start dev DB: `docker-compose -f docker-compose-dev.yaml`.
- DB admin panel @ _localhost:8080_, user: _admin_, pass: _password_.
- Start Node in hot reload: `npm run dev`.

## Codegen

- `pnpm codegen` to create/update GraphQL resolvers.
- `DATABASE_URL=postgresql://admin:password@localhost:5432/njm pnpm exec prisma migrate dev` to update migrations.
- `pnpm exec prisma generate` to init/refresh prisma client.
- `DATABASE_URL=postgresql://admin:password@localhost:5432/njm pnpm exec ts-node prisma/seed.ts` to manage initial test data. Use `--drop` to clean all existing data.
Use `--seed` to create mock data.

## Mock data generator

Data for app testing is provided by Spotify API - bulk generated by Spotify recommendation engine.
See _prisma/mockdata/_ for implementation details.

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
