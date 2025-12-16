# Image de base
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers
COPY package*.json ./

# Installer les dépendances SANS lancer l'app
RUN npm ci --only=production

# Copier le code source
COPY src/ ./src/

# Créer un utilisateur non-root
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Port exposé
EXPOSE 3000

# Variable pour éviter le démarrage pendant le build
ENV NODE_ENV=production

# Commande de démarrage
CMD ["node", "src/index.js"]