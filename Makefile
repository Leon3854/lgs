up:
	docker-compose up -d --build
migrate:
	docker-compose exec api npx prisma migrate dev
setup:
	docker-compose up -d --build
	docker-compose exec api npx prisma migrate dev --name init
	cd apps/web && npm install && npm run dev
