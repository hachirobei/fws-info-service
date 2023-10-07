FROM node:latest

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

EXPOSE 3002 

CMD ["node", "src/index.js"]