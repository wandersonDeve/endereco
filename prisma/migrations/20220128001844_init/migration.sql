-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);
