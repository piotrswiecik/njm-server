FROM node:20.11-bookworm

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "serve" ]

