package com.emorozov.semanticweblondon.examples.ms.eureka;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication {

	public static void main(String[] args) throws Exception {
		new SpringApplicationBuilder(EurekaApplication.class).run(args);
	}
}
