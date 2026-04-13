# Используем 22-ю версию (LTS), она стабильнее для Prisma
FROM node:22-alpine

WORKDIR /app

# Сначала копируем только файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код
COPY . .

# Генерируем клиент Prisma (это важно!)
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

# CMD ["npm", "run", "start:dev"]
CMD npx prisma generate && npm run start:dev