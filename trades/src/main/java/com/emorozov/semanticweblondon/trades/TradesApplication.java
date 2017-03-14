package com.emorozov.semanticweblondon.trades;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableCircuitBreaker
@EnableDiscoveryClient
public class TradesApplication {

    public static void main(String[] args) {
        new SpringApplicationBuilder(TradesApplication.class).web(true).run(args);
    }
}
