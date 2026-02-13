package ro.raresc4.userservice.controller.advice;

import exceptions.ConflictException;
import exceptions.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import utils.ExceptionUtils;

@RestControllerAdvice
public class ControllerAdvice {

    private final ExceptionUtils utils = new ExceptionUtils();

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(NotFoundException ex) {
        return utils.handleException(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity<?> handleConflictException(ConflictException ex) {
        return utils.handleException(ex.getMessage(), HttpStatus.CONFLICT);
    }
}
