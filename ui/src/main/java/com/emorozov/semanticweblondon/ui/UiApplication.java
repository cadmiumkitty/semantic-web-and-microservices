package com.emorozov.semanticweblondon.ui;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableCircuitBreaker
@EnableDiscoveryClient
public class UiApplication {

    public static void main(String[] args) {
        new SpringApplicationBuilder(UiApplication.class).web(true).run(args);
    }
}
