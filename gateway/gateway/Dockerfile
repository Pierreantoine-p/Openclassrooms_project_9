# Dockerfile for gateway
FROM openjdk:11-jre-slim
VOLUME /tmp
COPY target/gateway.jar gateway.jar
ENTRYPOINT ["java","-jar","/gateway.jar"]