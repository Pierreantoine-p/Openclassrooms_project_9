FROM node:18

# Installer Angular CLI
RUN npm install -g @angular/cli@^18

WORKDIR /app

# Copier le code de l'application
COPY . .

# Installer les dépendances
RUN npm install

# Démarrer l'application Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
