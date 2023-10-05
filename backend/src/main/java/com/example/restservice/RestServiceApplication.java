package main.java.com.example.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static main.java.com.example.restservice.CFCalc.getCFCalc;

@SpringBootApplication
public class RestServiceApplication {

	public static final int DEFAULT_DISTANCE = 100;
	public static void main(String[] args) {
		SpringApplication.run(RestServiceApplication.class, args);
		getCFCalc(DEFAULT_DISTANCE);
	}
}
