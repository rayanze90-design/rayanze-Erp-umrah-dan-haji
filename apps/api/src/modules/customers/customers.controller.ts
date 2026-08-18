import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('health')
  health() {
    return { module: 'customers', status: 'ok' as const };
  }
}
