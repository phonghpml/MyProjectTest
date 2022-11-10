# syntax=docker/dockerfile:1
FROM node:14.18.1
WORKDIR /test
COPY . .
RUN npm install
CMD ["npm", "run", "start:dev"]
EXPOSE 2000