FROM node:lts-alpine

COPY ./ /pieam.dev

WORKDIR /pieam.dev

CMD sh -c "npm install && npm run build"
