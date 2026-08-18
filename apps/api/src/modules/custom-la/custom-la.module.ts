import { Module } from '@nestjs/common';
import { CustomLaController } from './custom-la.controller';
import { CustomLaService } from './custom-la.service';

@Module({
  controllers: [CustomLaController],
  providers: [CustomLaService],
  exports: [CustomLaService]
})
export class CustomLaModule {}
