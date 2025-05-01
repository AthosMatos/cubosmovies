-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "subtitle" TEXT,
    "synopsis" TEXT,
    "popularity" DOUBLE PRECISION,
    "vote_average" DOUBLE PRECISION,
    "vote_count" INTEGER,
    "release_date" TIMESTAMP(3),
    "duration" INTEGER,
    "situation" TEXT,
    "language" TEXT,
    "budget" DOUBLE PRECISION,
    "revenue" DOUBLE PRECISION,
    "profit" DOUBLE PRECISION,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieGenres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MovieGenres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieGenresToMovies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MovieGenresToMovies_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "_MovieGenresToMovies_B_index" ON "_MovieGenresToMovies"("B");

-- AddForeignKey
ALTER TABLE "_MovieGenresToMovies" ADD CONSTRAINT "_MovieGenresToMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "MovieGenres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieGenresToMovies" ADD CONSTRAINT "_MovieGenresToMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
