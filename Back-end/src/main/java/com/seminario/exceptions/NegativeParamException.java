package com.seminario.exceptions;

public class NegativeParamException extends Exception {

	private static final long serialVersionUID = 1L;

	public NegativeParamException(String message) {
        super(message);
    }
}