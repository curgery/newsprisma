/*
  Warnings:

  - You are about to drop the column `authorId` on the `SavedArticle` table. All the data in the column will be lost.
  - You are about to drop the column `feedId` on the `SavedArticle` table. All the data in the column will be lost.
  - You are about to drop the `_BundleUserLikes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FeedUserLikes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedArticle" DROP CONSTRAINT "SavedArticle_authorId_fkey";

-- DropForeignKey
ALTER TABLE "SavedArticle" DROP CONSTRAINT "SavedArticle_feedId_fkey";

-- DropForeignKey
ALTER TABLE "_BundleUserLikes" DROP CONSTRAINT "_BundleUserLikes_A_fkey";

-- DropForeignKey
ALTER TABLE "_BundleUserLikes" DROP CONSTRAINT "_BundleUserLikes_B_fkey";

-- DropForeignKey
ALTER TABLE "_FeedUserLikes" DROP CONSTRAINT "_FeedUserLikes_A_fkey";

-- DropForeignKey
ALTER TABLE "_FeedUserLikes" DROP CONSTRAINT "_FeedUserLikes_B_fkey";

-- AlterTable
ALTER TABLE "SavedArticle" DROP COLUMN "authorId",
DROP COLUMN "feedId";

-- DropTable
DROP TABLE "_BundleUserLikes";

-- DropTable
DROP TABLE "_FeedUserLikes";
