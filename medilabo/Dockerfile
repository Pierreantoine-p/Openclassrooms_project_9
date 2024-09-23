FROM maven:3.8.6-openjdk-17 AS build

COPY ./pom.xml ./pom.xml
COPY ./src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

COPY ./target/medilabo-0.0.1-SNAPSHOT.jar medilabo.jar

ENTRYPOINT ["java", "-jar", "medilabo.jar"]

