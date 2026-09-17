# Build
FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Run
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev

CMD ["node", "dist/index.js"]