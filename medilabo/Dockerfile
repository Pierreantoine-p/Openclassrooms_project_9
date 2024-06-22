# Dockerfile for medilabo
FROM openjdk:11-jre-slim
VOLUME /tmp
COPY target/medilabo.jar medilabo.jar
ENTRYPOINT ["java","-jar","/medilabo.jar"]