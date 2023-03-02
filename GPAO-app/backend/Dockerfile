# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim



# Set the working directory to /app
WORKDIR /app

# Copy the gradle build files to the container
COPY build.gradle gradlew settings.gradle /app/

# Copy the gradle wrapper to the container
COPY gradle /app/gradle

# Download dependencies and build the application
RUN ./gradlew build

# Copy the built jar to /app/app.jar in the container
#COPY build/libs/*.jar app.jar

COPY app.jar /app.jar
COPY --from=build /home/gradle/src/build/libs/*.jar /app.jar

# Expose port 8080 for the application
EXPOSE 8080

# Run the application using java -jar command
CMD ["java", "-jar", "app.jar"]