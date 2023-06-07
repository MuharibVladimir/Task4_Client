FROM node:17-alpine

WORKDIR /app

COPY my-app/package.json .
COPY my-app/package-lock.json .

RUN npm install

COPY my-app/ .

EXPOSE 3000

CMD ["npm", "start"]