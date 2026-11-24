FROM node:16-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .


FROM node:16-alpine
WORKDIR /usr/src/app

RUN adduser -D appuser

COPY --from=builder --chown=appuser:appuser /usr/src/app /usr/src/app

USER appuser

CMD ["node", "/usr/src/app/index.js"]