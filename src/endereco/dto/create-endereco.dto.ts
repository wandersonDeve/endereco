import { IsString } from "class-validator";
import { Endereco } from "../entities/endereco.entity";

export class CreateEnderecoDto extends Endereco
{
    @IsString()
    nome: string;

    @IsString()
    rua: string;
}
