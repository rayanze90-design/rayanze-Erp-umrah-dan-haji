import { Controller, Get } from '@nestjs/common';

@Controller('leads')
export class LeadsController {
  @Get('health')
  health() {
    return { module: 'leads', status: 'ok' as const };
  }
}
