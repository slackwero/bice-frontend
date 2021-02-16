FROM node:14.15.5-alpine3.13
ENV LANG C.UTF-8

WORKDIR /app

COPY package*.json ./
RUN apk add --no-cache git bash \
    && npm install -g @angular/cli \
    && npm install

COPY . .

EXPOSE 4200
ENTRYPOINT ["./entrypoint.sh"]
#CMD [ "node", "index.js" ]