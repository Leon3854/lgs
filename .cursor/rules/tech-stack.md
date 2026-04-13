# Tech Stack & Architecture Rules

## Backend (NestJS)
- Используй только NestJS для API.
- Все логи должны быть структурированы (JSON) через Winston и отправляться в stdout для сбора Loki.
- Метрики должны быть доступны по адресу GET /metrics для Prometheus.

## Frontend (Next.js)
- Используй Next.js App Router.
- UI компоненты: shadcn/ui + Tailwind CSS.
- Управление данными: TanStack Query (React Query).

## Database
- Только Prisma ORM.
- PostgreSQL.