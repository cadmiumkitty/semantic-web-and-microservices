# Semantic Web and Microservices

## Semantic Web London March 2017

This code is from the seventh [Semantic Web London](https://www.meetup.com/semantic-web-london/events/237979906/)
meetup in March 2016.

## Intro

Central premise of the talk is that Semantic Web standards are a good fit for building microservice-based applications because they promote reuse and, ultimately, reduce the cost of system development and integration.

Specific examples covered in this talk are reuse of the UI components and streamlining of the rule development and management.

## Dependencies

You'll need [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and [Apache Maven 3.3.x](https://maven.apache.org/).

Node and NPM are downloaded as part of the build using [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin).

## Implementation notes

 1. This implementation is following http://projects.spring.io/spring-cloud/
 1. Config-first approach is used. Location of the configuration server
 is known to clients, rather than discovered from Eureka discovery service.

## Building

```
mvn clean install
```

## Running

You'll need to start all services that are developed as part of the ecosystem: Eureka, Config, Zuul, and the actual microservices.

```
java -jar eureka/target/semantic-web-and-microservices-config-1.0.0-SNAPSHOT.jar
java -jar eureka/target/semantic-web-and-microservices-eureka-1.0.0-SNAPSHOT.jar
java -jar zuul/target/semantic-web-and-microservices-zuul-1.0.0-SNAPSHOT.jar
java -jar zuul/target/semantic-web-and-microservices-trades-1.0.0-SNAPSHOT.jar
java -jar zuul/target/semantic-web-and-microservices-people-1.0.0-SNAPSHOT.jar
java -jar zuul/target/semantic-web-and-microservices-instrument-1.0.0-SNAPSHOT.jar
```

## Demo sequence for the talk

 1. Start the apps
 1. Open the web app
 1. Open the trade blotter
 1. Navigate to trade
 1. Navigate to instrument
 1. Navigate to client

## Todo

 1. Project set up - DONE
 1. Eureka - DONE
 1. Zuul - DONE
 1. Config - DONE
 1. Trades - DONE
 1. Clients - DONE
 1. Instruments - DONE
 1. UI - TODO
