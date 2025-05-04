-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "vote_count" INTEGER NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "situation" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "budget" DOUBLE PRECISION NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "poster" TEXT NOT NULL,
    "backdrop" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,

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
