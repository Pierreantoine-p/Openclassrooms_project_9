# Dockerfile for report
FROM openjdk:11-jre-slim
VOLUME /tmp
COPY target/report.jar report.jar
ENTRYPOINT ["java","-jar","/report.jar"]