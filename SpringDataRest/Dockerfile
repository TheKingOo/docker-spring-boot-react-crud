# Use a base image with a JDK for Spring Boot
FROM openjdk:19-alpine

# Copy the Spring Boot JAR file into the image
COPY target/*.jar app.jar

# Define the command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]