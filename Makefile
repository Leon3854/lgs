up:
	docker-compose up -d --build
migrate:
	docker-compose exec api npx prisma migrate dev
setup:
	make up && make migrate
