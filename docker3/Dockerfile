FROM alpine:3.14

RUN apk add nodejs npm

COPY ./server /var/www/server-1

WORKDIR /var/www/server-1

RUN npm install

CMD npm run dev