/*
  Warnings:

  - The values [PAYMENT_PENDING,SHIPPING_PENDING,SENT] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('CART', 'AWAIT_PAY', 'AWAIT_SHIP', 'SHIPPED', 'CANCELLED');
ALTER TABLE "Order" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'CART';
COMMIT;
