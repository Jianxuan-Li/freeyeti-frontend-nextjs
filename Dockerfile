FROM node:18.14.2-alpine3.17 AS builder

RUN apk add --no-cache libc6-compat

# get latest version of pnpm from https://www.npmjs.com/package/pnpm

RUN corepack enable && corepack prepare pnpm@8.6.0 --activate

RUN mkdir /workcode
WORKDIR /workcode
COPY . .

RUN pnpm install -s && NODE_ENV=production pnpm build

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