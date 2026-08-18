import { Controller, Get } from '@nestjs/common';

@Controller('finance')
export class FinanceController {
  @Get('health')
  health() {
    return { module: 'finance', status: 'ok' as const };
  }
}
