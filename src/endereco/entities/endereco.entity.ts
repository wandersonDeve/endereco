import { Prisma } from "@prisma/client";

export class Endereco implements Prisma.EnderecoUncheckedCreateInput{
    id: number;
    nome: string;
    rua: string;
}
