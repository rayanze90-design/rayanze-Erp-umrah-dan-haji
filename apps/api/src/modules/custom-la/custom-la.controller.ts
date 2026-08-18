import { Controller, Get } from '@nestjs/common';

@Controller('custom-la')
export class CustomLaController {
  @Get('health')
  health() {
    return { module: 'custom-la', status: 'ok' as const };
  }
}
