import { Controller, Get } from '@nestjs/common';

@Controller('approvals')
export class ApprovalsController {
  @Get('health')
  health() {
    return { module: 'approvals', status: 'ok' as const };
  }
}
