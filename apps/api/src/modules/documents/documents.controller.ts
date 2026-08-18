import { Controller, Get } from '@nestjs/common';

@Controller('documents')
export class DocumentsController {
  @Get('health')
  health() {
    return { module: 'documents', status: 'ok' as const };
  }
}
