FROM openjdk:8-jdk-slim

RUN useradd -ms /bin/bash user
USER user
WORKDIR /home/user

COPY --chown=user:user target/*.jar app.jar

# Env set by kubernetes config map, default value: not_set
ENV spring-profile not_set
ENTRYPOINT [ "java", "-Dspring.profiles.active=${spring-profile}", "-jar", "app.jar" ]