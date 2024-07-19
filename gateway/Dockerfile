# Dockerfile for gateway
FROM openjdk:17-jdk-alpine

COPY ./target/gateway.jar gateway.jar

ENTRYPOINT ["java", "-jar", "gateway.jar"]