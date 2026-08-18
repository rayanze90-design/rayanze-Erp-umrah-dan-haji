import { Controller, Get } from '@nestjs/common';

@Controller('packages')
export class PackagesController {
  @Get('health')
  health() {
    return { module: 'packages', status: 'ok' as const };
  }
}
