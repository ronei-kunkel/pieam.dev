FROM node:20.15.1-alpine3.20

COPY ./ /frontend/pieam.dev

WORKDIR /frontend/pieam.dev

CMD sh -c "npm install && npm run build"
