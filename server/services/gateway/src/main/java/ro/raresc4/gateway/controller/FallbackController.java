package ro.raresc4.gateway.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/fallback")
public class FallbackController {
    @GetMapping("/content")
    public Mono<ResponseEntity<Void>> contentFallback() {
        return Mono.just(ResponseEntity.status(503).build());
    }

    @GetMapping("/user")
    public Mono<ResponseEntity<Void>> userFallback() {
        return Mono.just(ResponseEntity.status(503).build());
    }

    @GetMapping("/upload")
    public Mono<ResponseEntity<Void>> uploadFallback() {
        return Mono.just(ResponseEntity.status(503).build());
    }
}
