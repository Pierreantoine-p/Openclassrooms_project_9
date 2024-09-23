# Étape 1 : Construction de l'application avec Maven
FROM maven:latest AS build

WORKDIR /app

COPY ./pom.xml ./pom.xml
COPY ./src ./src

RUN mvn clean package -DskipTests

# Étape 2 : Construction de l'image finale basée sur JDK
FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copier le fichier .jar généré à partir de l'étape de build
COPY --from=build /app/target/medilabo-0.0.1-SNAPSHOT.jar medilabo.jar

# Exécuter l'application
ENTRYPOINT ["java", "-jar", "medilabo.jar"]
