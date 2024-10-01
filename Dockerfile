FROM node:20.17.0 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app /app

CMD ["npm", "run", "start"]
