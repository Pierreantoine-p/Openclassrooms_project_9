# Application Medilabo

Ce dépôt contient une application qui composée des éléments suivants :
- Une application front-end développée avec Angular.
- Un service gateway.
- Trois microservices.
- Deux bases de données : MySQL et MongoDB.

Tous les services sont containerisés avec Docker et orchestrés avec Docker Compose.

## Structure du Projet

Le projet est structuré comme suit :
- `mysql/` : Contient la configuration Docker pour MySQL et les scripts d'initialisation.
- `mongo/` : Contient la configuration Docker pour MongoDB.
- `medilabo/` : Microservice pour la gestion des patients.
- `note/` : Microservice pour la gestion des notes.
- `report/` : Microservice pour les rapports.
- `gateway/` : Service gateway qui route les requêtes vers les microservices appropriés.
- `ui/` : Application front-end Angular.

## Prérequis

Assurez-vous d'avoir installé les éléments suivants sur votre système :
- Docker : [Installer Docker](https://docs.docker.com/get-docker/)
- Docker Compose : [Installer Docker Compose](https://docs.docker.com/compose/install/)

## Configuration des Variables d'Environnement

Avant de démarrer l'application, vous devez configurer certaines variables d'environnement sur votre système. Voici la liste des variables nécessaires pour chaque service :

### MySQL (`medilabo_db`)
- `MYSQL_USER` : Utilisateur de la base de données
- `MYSQL_PASSWORD` : Mot de passe de l'utilisateur
- `MYSQL_DATABASE` : Nom de la base de données
- `MYSQL_ROOT_PASSWORD` : Mot de passe de l'utilisateur root

### MongoDB (`note-db`)
- `MONGO_INITDB_ROOT_USERNAME` : Nom d'utilisateur root
- `MONGO_INITDB_ROOT_PASSWORD` : Mot de passe root

### Microservice Medilabo (`medilabo`)
- `DATASOURCE_URL` : URL JDBC pour MySQL
- `DATASOURCE_USERNAME` : Nom d'utilisateur MySQL
- `DATASOURCE_PASSWORD` : Mot de passe MySQL
- `LOG_LEVEL` : Niveau de log (e.g., info, debug)

### Microservice Note (`note`)
- `MONGO_URI` : URI de connexion MongoDB
- `MONGO_INITDB_DATABASE` : Nom de la base de données
- `MONGO_INITDB_ROOT_USERNAME` : Nom d'utilisateur root
- `MONGO_INITDB_ROOT_PASSWORD` : Mot de passe root
- `MONGO_AUTO_INDEX_CREATION` : Activer la création automatique d'index
- `LOG_LEVEL` : Niveau de log

### Ajouter les Variables d'Environnement

Vous pouvez ajouter ces variables d'environnement en les définissant dans votre terminal avant de lancer Docker Compose. Voici un exemple pour un système UNIX (Linux/Mac) :

```
export MYSQL_USER=admin
export MYSQL_PASSWORD=password
export MYSQL_DATABASE=medilabo_db
export MYSQL_ROOT_PASSWORD=HGHJ45JID
export MONGO_INITDB_ROOT_USERNAME=admin
export MONGO_INITDB_ROOT_PASSWORD=password
export DATASOURCE_URL=jdbc:mysql://medilabo_db:3306/medilabo_db
export DATASOURCE_USERNAME=admin
export DATASOURCE_PASSWORD=password
export LOG_LEVEL=info
# Ajouter d'autres variables selon les besoins...

```

Configuration et Exécution de l'Application

1. Cloner le Dépôt


```
git clone <url-du-dépôt>
cd <répertoire-du-dépôt>
```
2. Construire et Démarrer l'Application

Exécutez la commande suivante pour construire et démarrer tous les services avec Docker Compose :
```
docker-compose up --build
```
Cette commande va :

   
Construire les images Docker pour chaque service en fonction des Dockerfiles spécifiés.
Créer et démarrer les conteneurs pour les bases de données, les microservices, le gateway et l'application Angular.
Configurer le réseau nécessaire pour permettre aux conteneurs de communiquer.

3. Accéder à l'Application

Une fois l'application démarrée, vous pouvez accéder à l'interface front-end Angular en ouvrant :

http://localhost:4200

Le service gateway sera disponible à l'adresse :

http://localhost:8080

Données Persistantes

L'application utilise des volumes pour persister les données :

    Les données MySQL sont stockées dans /volume1/database/msa_data sur l'hôte.
    Les données MongoDB sont stockées dans /volume1/database/note-db sur l'hôte.

Arrêter l'Application

Pour arrêter et supprimer tous les conteneurs en cours d'exécution, exécutez :

bash

docker-compose down

Dépannage

    Assurez-vous que Docker et Docker Compose sont correctement installés.
    Vérifiez que les ports 4200 et 8080 ne sont pas utilisés par d'autres applications.
