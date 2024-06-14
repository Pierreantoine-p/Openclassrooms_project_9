FROM openjdk:17-slim

# Installer Maven
RUN apt-get update && apt-get install -y maven

WORKDIR /app

# Dépendances
COPY pom.xml .
RUN mvn dependency:go-offline

# Copier le code de l'application
COPY . .

# Construire et exécuter l'application
CMD ["bash", "-c", "mvn clean install && java -jar target/*.jar"]