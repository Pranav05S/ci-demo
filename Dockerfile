FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY greet.js server.js ./
EXPOSE 3000
CMD ["node", "server.js"]
