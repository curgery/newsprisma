/*
  Warnings:

  - Added the required column `url` to the `SavedArticle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bundle" ALTER COLUMN "description" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "SavedArticle" ADD COLUMN     "authorId" TEXT,
ADD COLUMN     "feedId" TEXT,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_FeedUserLikes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BundleUserLikes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FeedUserLikes_AB_unique" ON "_FeedUserLikes"("A", "B");

-- CreateIndex
CREATE INDEX "_FeedUserLikes_B_index" ON "_FeedUserLikes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BundleUserLikes_AB_unique" ON "_BundleUserLikes"("A", "B");

-- CreateIndex
CREATE INDEX "_BundleUserLikes_B_index" ON "_BundleUserLikes"("B");

-- CreateIndex
CREATE INDEX "SavedArticle.authorId_url_index" ON "SavedArticle"("authorId", "url");

-- AddForeignKey
ALTER TABLE "SavedArticle" ADD FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedArticle" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeedUserLikes" ADD FOREIGN KEY ("A") REFERENCES "Feed"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeedUserLikes" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BundleUserLikes" ADD FOREIGN KEY ("A") REFERENCES "Bundle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BundleUserLikes" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
