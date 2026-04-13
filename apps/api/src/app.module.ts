import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Это магическая строка, которая создает путь /metrics
    PrometheusModule.register({
      path: '/metrics',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}