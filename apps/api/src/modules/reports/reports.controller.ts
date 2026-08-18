import { Controller, Get } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
  @Get('health')
  health() {
    return { module: 'reports', status: 'ok' as const };
  }
}
