FROM node:22 AS builder

RUN corepack enable pnpm

WORKDIR /build
COPY package.json pnpm-lock.yaml /build/
RUN pnpm install

COPY . /build/
RUN pnpm build

FROM nginxinc/nginx-unprivileged:1-alpine
COPY --from=builder /build/dist/ /usr/share/nginx/html/
