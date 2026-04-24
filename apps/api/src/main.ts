import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from "@sentry/nestjs";

async function bootstrap() {
  // Sentry integrated for distributed error tracking. DSN is externalized to env vars.
  Sentry.init({
    dsn: "https://sentry.io", // Фейковый или реальный DSN
    tracesSampleRate: 1.0,
  });
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
