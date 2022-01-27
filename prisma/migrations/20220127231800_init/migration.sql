-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Endereco_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
