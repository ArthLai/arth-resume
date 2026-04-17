FROM node:22-alpine AS deps

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --prefer-offline

FROM node:22-alpine AS builder

WORKDIR /src

COPY --from=deps /src/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /src/public ./public
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
