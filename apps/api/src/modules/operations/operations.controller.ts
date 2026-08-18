import { Controller, Get } from '@nestjs/common';

@Controller('operations')
export class OperationsController {
  @Get('health')
  health() {
    return { module: 'operations', status: 'ok' as const };
  }
}
