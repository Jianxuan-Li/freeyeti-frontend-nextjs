FROM node:18.14.2-alpine3.17

ENV NODE_ENV=production

RUN mkdir /workcode
WORKDIR /workcode
COPY . .

RUN yarn install --silent && yarn build

EXPOSE 3000
CMD ["yarn", "start"]
