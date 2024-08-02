# Étape de build
FROM node:18 AS build

# Définir le répertoire de travail à /app
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tout le reste des fichiers du projet dans le conteneur
COPY . .

# Construire l'application Angular pour la production
RUN npm run build --prod

# Vérifier que les fichiers sont construits et placés dans le bon répertoire
RUN ls -al /app/dist/medilabo

# Étape de production
FROM httpd:alpine

# Copier les fichiers construits de l'étape de build vers le répertoire HTML d'Apache
COPY --from=build /app/dist/medilabo /usr/local/apache2/htdocs/

# Exposer le port 80 pour que l'application soit accessible
EXPOSE 80

CMD ["httpd-foreground"]
