/*
  Warnings:

  - You are about to drop the column `isPlaced` on the `Order` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CART', 'PAYMENT_PENDING', 'SHIPPING_PENDING', 'SENT', 'CANCELLED');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "isPlaced",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'CART';
