import { Controller, Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {
  @Get('health')
  health() {
    return { module: 'vendors', status: 'ok' as const };
  }
}
