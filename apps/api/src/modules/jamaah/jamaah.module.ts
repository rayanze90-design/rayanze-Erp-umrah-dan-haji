import { Module } from '@nestjs/common';
import { JamaahController } from './jamaah.controller';
import { JamaahService } from './jamaah.service';

@Module({
  controllers: [JamaahController],
  providers: [JamaahService],
  exports: [JamaahService]
})
export class JamaahModule {}
