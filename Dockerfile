# Stage 1: Installation des dépendances et build de l'application
FROM node:18-alpine AS builder
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application pour la production
RUN npm run build

# Stage 2: Création de l'image de production finale
FROM node:18-alpine AS runner
WORKDIR /app

# Définir l'environnement de production
ENV NODE_ENV=production

# Copier les dépendances de production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copier les fichiers de l'application buildée
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Exposer le port sur lequel Next.js tourne
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
