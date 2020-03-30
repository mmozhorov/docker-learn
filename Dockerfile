FROM node:carbon

WORKDIR /first-docker-app

COPY package*.json ./

RUN npm install

COPY . /first-docker-app

EXPOSE 3000

CMD npm run dev && node server.js