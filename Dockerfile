FROM openjdk:8
EXPOSE 9001
ADD target/Food-0.0.1-SNAPSHOT.jar Food-0.0.1-SNAPSHOT.jar 
ENTRYPOINT ["java", "-jar", "Food-0.0.1-SNAPSHOT.jar"]