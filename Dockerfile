# Image légère directe
FROM node:20-alpine

WORKDIR /app

# Copier les fichiers package (même vides)
COPY package*.json ./

# Installer (crée node_modules vide sans erreur)
RUN npm ci

# Copier le code source
COPY src/ ./src/
COPY tests/ ./tests/

# Sécurité : utilisateur non-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "src/index.js"]