# Frontend Standards (Signal Lab)

- **Framework**: Next.js 14+ (App Router).
- **Styling**: Tailwind CSS + shadcn/ui.
- **Data Fetching**: Только TanStack Query. Прямые вызовы axios в компонентах запрещены.
- **Forms**: React Hook Form + Zod для валидации.
- **Observability**: При клике на сценарий отправлять `x-request-id` для трейсинга логов.