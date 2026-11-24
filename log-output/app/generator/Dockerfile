FROM node:14-alpine
WORKDIR /usr/src/app

RUN adduser -D appuser && \
    chown -R appuser:appuser /usr/src/app

COPY --chown=appuser:appuser . .

USER appuser

CMD ["node", "/usr/src/app/index.js"]