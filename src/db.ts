import { PrismaClient } from '@prisma/client';

import { getDatabaseUri } from './config/config';

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  datasources: {
    db: {
      url: getDatabaseUri(),
    },
  }
});