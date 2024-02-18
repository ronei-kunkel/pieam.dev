FROM node:lts-alpine

COPY ./ /frontend/pieam.dev

WORKDIR /frontend/pieam.dev

CMD sh -c "npm install && npm run build"
