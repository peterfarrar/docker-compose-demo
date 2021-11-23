FROM node:14.14.0-alpine
WORKDIR "/app"
COPY ./package*.json ./

RUN npm install --only=production

COPY . .

ENV NODE_PORT=5000
EXPOSE 5000
CMD ["npm", "start"]