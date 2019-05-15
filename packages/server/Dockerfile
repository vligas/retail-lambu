FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run migrate fresh && npm run seed all
# RUN npm run prestart:prod
# RUN npm run migrate fresh
# RUN npm run seed all
# CMD node -r ts-node/register/transpile-only -r tsconfig-paths/register dist/main.js
EXPOSE 3000
