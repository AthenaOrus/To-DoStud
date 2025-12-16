# Étape de build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape de production
FROM node:20-alpine
WORKDIR /app

# Créer utilisateur non-root
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Copier depuis le builder
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./

# Port
EXPOSE 3000

# Commande
CMD ["node", "src/index.js"]