# Signal Lab — Observability Playground

Песочница для генерации и мониторинга системных сигналов: логи, метрики и ошибки — полный observability-стек одной командой.

![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?style=for-the-badge&logo=nestjs)
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus)
![Loki](https://img.shields.io/badge/Loki-F46800?style=for-the-badge&logo=grafana)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)

## Что это

Демо-стенд полного цикла observability: приложение генерирует сигналы (логи через Winston, метрики через Prometheus, ошибки через Sentry), а стек собирает и визуализирует их в Grafana. Практика для SRE-паттернов и отладки микросервисов.

## Observability-стек

| Задача | Инструмент | Порт |
|---|---|---|
| Логирование | Loki + Winston (Promtail) | :3100 |
| Метрики | Prometheus | :9090 |
| Ошибки / traces | Sentry | :9000 |
| Визуализация | Grafana (admin/admin) | :3002 |
| API | NestJS | :3001 |
| UI | Next.js | :5173 |

## Быстрый старт

```bash
# Полный запуск: билд, миграции БД, старт UI
make setup

# Либо только инфраструктура (Docker)
docker-compose up -d --build

# Миграции Prisma
docker-compose exec api npx prisma migrate dev --name init

# Логи API в реальном времени
docker-compose logs -f api
```

## Проверка сценариев

1. **Логи** — Grafana → Explore → источник Loki → `{container="signal-lab-api"}`.
2. **Метрики** — Grafana → Explore → Prometheus → `http_requests_total`.
3. **Дашборд** — Grafana → Dashboards → "Signal Lab Overview" (RPS, latency, error rate).
4. **Ошибки** — `curl http://localhost:3001/debug-sentry` → Sentry → Issues.

## Команды Makefile

| Команда | Действие |
|---|---|
| `make setup` | полный запуск с нуля (билд + миграции + UI) |
| `make up` | поднять инфраструктуру (Docker) |
| `make db-migrate` | применить миграции Prisma |
| `make ui-dev` | запустить UI в dev-режиме |

## AI-правила

В проекте — кастомные правила для Cursor (`.cursor/rules/`) под стек NestJS + Prisma + Winston: модульная структура, стандарты логирования, паттерны транзакций.
