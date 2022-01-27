import { Injectable, NotFoundException } from '@nestjs/common';
import { Endereco } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Injectable()
export class EnderecoService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateEnderecoDto) {
    const adress = await this.db.endereco.create({ data });
    return adress;
  }

  async findAll() {
    return await this.db.endereco.findMany();
  }

  async findOne(id: number):Promise<Endereco> {
    const adress = await this.db.endereco.findUnique({
      where: {
        id: id,
      },
    });

    if (!adress) {
      throw new NotFoundException('Usuario Não Encontrado');
    }

    return adress
  }

  async update(id: number, data: UpdateEnderecoDto) {
    const adress = await this.db.endereco.findFirst({
      where:{id}
    });

    if (!adress) {
      throw new NotFoundException('Usuario Não Encontrado');
    }

    const newAdress = await this.db.endereco.update({
      data,
      where: {
        id: id
      }
    })
    return newAdress;

  }

  async remove(id: number) {
    await this.db.endereco.delete({
      where: { id },
    });

    return 'Deletado com sucesso'
  }
}
