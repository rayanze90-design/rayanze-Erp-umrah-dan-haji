import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get('health')
  health() {
    return { module: 'dashboard', status: 'ok' as const };
  }
}
