FROM  --platform=linux/amd64 node:14-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM  --platform=linux/amd64 node:14-alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PORT 3000

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install && yarn cache clean

COPY --from=builder /app/dist/ dist/
COPY custom custom
COPY metadata metadata
COPY migrations migrations
COPY migrations-v1 migrations-v1

HEALTHCHECK --interval=60s --timeout=2s --retries=3 CMD wget localhost:${PORT}/healthz -q -O - > /dev/null 2>&1

EXPOSE $PORT
CMD ["yarn", "start"]
