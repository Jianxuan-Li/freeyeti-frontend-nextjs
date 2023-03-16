FROM node:18.14.2-alpine3.17 AS builder

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

RUN mkdir /workcode
WORKDIR /workcode
COPY . .

RUN yarn install --silent && yarn build

FROM node:18.14.2-alpine3.17 AS runner

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY --from=builder /workcode/public ./public
COPY --from=builder /workcode/.next/standalone ./
COPY --from=builder /workcode/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
