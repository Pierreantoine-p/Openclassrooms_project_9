FROM maven:latest AS build

WORKDIR /app

COPY ./pom.xml ./pom.xml
COPY ./src ./src

RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

COPY --from=build /app/target/gateway.jar gateway.jar

ENTRYPOINT ["java", "-jar", "gateway.jar"]