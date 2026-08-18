import { Controller, Get } from '@nestjs/common';

@Controller('jamaah')
export class JamaahController {
  @Get('health')
  health() {
    return { module: 'jamaah', status: 'ok' as const };
  }
}
