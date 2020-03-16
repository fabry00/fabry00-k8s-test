FROM openjdk:8-jdk-slim

RUN useradd -ms /bin/bash user
USER user
WORKDIR /home/user

COPY --chown=user:user target/*.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]