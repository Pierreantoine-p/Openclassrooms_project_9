FROM maven:latest AS build

WORKDIR /app

COPY ./pom.xml ./pom.xml
COPY ./src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

COPY --from=build /app/target/report-0.0.1-SNAPSHOT.jar report.jar

COPY src/main/resources/application.properties /src/main/resources/application.properties
COPY src/main/resources/triggerterms.json /src/main/resources/triggerterms.json

ENTRYPOINT ["java", "-jar", "report.jar"]