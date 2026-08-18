import { Controller, Get } from '@nestjs/common';

@Controller('itinerary')
export class ItineraryController {
  @Get('health')
  health() {
    return { module: 'itinerary', status: 'ok' as const };
  }
}
