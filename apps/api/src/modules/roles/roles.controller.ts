import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  @Get('health')
  health() {
    return { module: 'roles', status: 'ok' as const };
  }
}
