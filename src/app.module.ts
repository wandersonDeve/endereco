import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
