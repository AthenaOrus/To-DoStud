# Étape de build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances (développement + production)
RUN npm ci

# Copier le code source
COPY src/ ./src/
COPY tests/ ./tests/

# Étape de production
FROM node:20-alpine

WORKDIR /app

# Créer un utilisateur non-root pour la sécurité
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copier depuis le builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./

# Changer les permissions
RUN chown -R nodejs:nodejs /app

# Passer à l'utilisateur non-root
USER nodejs

# Exposer le port
EXPOSE 3000

# Variable d'environnement
ENV NODE_ENV=production

# Commande de démarrage
CMD ["node", "src/index.js"]