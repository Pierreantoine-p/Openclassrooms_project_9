# Dockerfile for note
FROM openjdk:11-jre-slim
VOLUME /tmp
COPY target/note.jar note.jar
ENTRYPOINT ["java","-jar","/note.jar"]