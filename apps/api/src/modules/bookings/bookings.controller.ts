import { Controller, Get } from '@nestjs/common';

@Controller('bookings')
export class BookingsController {
  @Get('health')
  health() {
    return { module: 'bookings', status: 'ok' as const };
  }
}
