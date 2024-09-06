# Étape 1 : Utiliser une image node pour builder l'application Angular
FROM node:18.13 as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le code de l'application et lancer la compilation
COPY . .
RUN npm run build --prod

# Étape 2 : Utiliser une image nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers compilés de la première étape vers NGINX
COPY --from=build /app/dist/medilabo/browser /usr/share/nginx/html

# Copier un fichier de configuration NGINX personnalisé (facultatif)
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
