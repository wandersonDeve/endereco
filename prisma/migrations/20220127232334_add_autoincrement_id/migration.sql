-- DropIndex
DROP INDEX `Endereco_id_key` ON `endereco`;

-- AlterTable
ALTER TABLE `endereco` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;
