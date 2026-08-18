import { Controller, Get } from '@nestjs/common';

@Controller('visas')
export class VisasController {
  @Get('health')
  health() {
    return { module: 'visas', status: 'ok' as const };
  }
}
