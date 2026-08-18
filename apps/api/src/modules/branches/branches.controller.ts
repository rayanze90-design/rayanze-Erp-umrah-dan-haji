import { Controller, Get } from '@nestjs/common';

@Controller('branches')
export class BranchesController {
  @Get('health')
  health() {
    return { module: 'branches', status: 'ok' as const };
  }
}
