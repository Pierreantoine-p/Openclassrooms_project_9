FROM maven:3.8.6-openjdk-17 AS build

COPY ./pom.xml ./pom.xml
COPY ./src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

COPY ./target/note-0.0.1-SNAPSHOT.jar note.jar

ENTRYPOINT ["java", "-jar", "note.jar"]