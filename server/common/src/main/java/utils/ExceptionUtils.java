package utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;

public class ExceptionUtils {
    public ResponseEntity<?> handleException(String message, HttpStatus status) {
        return ResponseEntity.status(status).body(new HashMap<>() {{
            put("message", message);
        }});
    }
}
