FROM mhart/alpine-node:latest
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npm","run","start"]
