import { Controller, Get, Post, Body, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('scenarios/run')
  async runScenario(@Body() body: { type: string }) {
    this.logger.log({ message: 'Running scenario', type: body.type });
    
    if (body.type === 'error') {
      throw new HttpException('System simulated error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    return { status: 'success', timestamp: new Date() };
  }
}
