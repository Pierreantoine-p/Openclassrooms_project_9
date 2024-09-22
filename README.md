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

3. Connexion manuelle à la base de données MySQL

Si vous souhaitez interagir manuellement avec la base de données MySQL, suivez les étapes ci-dessous :

### Accéder au conteneur MySQL

Tout d'abord, démarrez le conteneur MySQL, puis accédez-y en exécutant la commande suivante dans votre terminal :

```
docker exec -it medilabo_db bash
```

Se connecter à MySQL

Une fois à l'intérieur du conteneur, connectez-vous à MySQL avec l'utilisateur root (ou un autre utilisateur que vous avez configuré) en exécutant :

```
mysql -u admin -p
```

Il vous sera demandé le mot de passe que vous avez défini dans la variable MYSQL_ROOT_PASSWORD.

Créer la base de données et la table

Ensuite, exécutez les commandes SQL suivantes pour créer une base de données medilabo_db, puis une table user :

```
CREATE DATABASE IF NOT EXISTS medilabo_db;

USE medilabo_db;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
    Id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(125) NOT NULL,
    last_name VARCHAR(125) NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    PRIMARY KEY (Id)
);

INSERT INTO user (first_name, last_name, birth_date, gender, address, phone_number) 
VALUES 
    ('TestNone', 'Test', '1966-12-31', 'F', '1 Brookside St', '100-222-3333'),
    ('TestBorderline', 'Test', '1945-06-24', 'M', '2 High St', '200-333-4444'),
    ('TestInDanger', 'Test', '2004-06-18', 'M', '3 Club Road', '300-444-5555'),
    ('TestEarlyOnset', 'Test', '2002-06-28', 'F', '4 Valley Dr', '400-555-6666');

```
Vérifier les données insérées

Vous pouvez vérifier les données que vous venez d'insérer en exécutant la commande suivante dans le prompt MySQL :

```
SELECT * FROM user;
```

4. Accéder à l'Application

Une fois l'application démarrée, vous pouvez accéder à l'interface front-end Angular en ouvrant :

http://localhost:4200

Le service gateway sera disponible à l'adresse :

http://localhost:8080

Le service medilabo sera disponible à l'adresse :

http://localhost:8081

Le service note sera disponible à l'adresse :

http://localhost:8082

Le service report sera disponible à l'adresse :

http://localhost:8083

Données Persistantes

L'application utilise des volumes pour persister les données :

    Les données MySQL sont stockées dans /volume1/database/msa_data sur l'hôte.
    Les données MongoDB sont stockées dans /volume1/database/note-db sur l'hôte.

Arrêter l'Application

Pour arrêter et supprimer tous les conteneurs en cours d'exécution, exécutez :

```
docker-compose down
```

Dépannage

    Assurez-vous que Docker et Docker Compose sont correctement installés.
    Vérifiez que les ports 4200, 8080, 8081, 8082 et 8083 ne sont pas utilisés par d'autres applications.
