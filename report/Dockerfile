FROM openjdk:17-jdk-alpine

COPY ./target/report-0.0.1-SNAPSHOT.jar report.jar

COPY src/main/resources/application.properties /src/main/resources/application.properties
COPY src/main/resources/triggerterms.json /src/main/resources/triggerterms.json

ENTRYPOINT ["java", "-jar", "report.jar"]