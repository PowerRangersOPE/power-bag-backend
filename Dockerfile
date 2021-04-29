FROM node:lts

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

RUN npm run db:create

RUN npm run db:migrate

CMD ["npm","start"]