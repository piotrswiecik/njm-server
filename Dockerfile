FROM node:20.11-bookworm

WORKDIR /app

COPY package.json .

COPY prisma ./prisma

RUN npm install

RUN npx prisma generate

COPY . .

CMD [ "npm", "run", "serve" ]

