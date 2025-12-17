# Étape 1 : build React
FROM node:20-alpine as build

# Créer le dossier de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Build de l'application React
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:alpine

# Copier le build React dans le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier un fichier de configuration Nginx personnalisé (optionnel)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]
