package com.jystudy.coffee0528.repository;

public interface ReferenceHandleMapper {
    int deleteReference(String property, Object value);
    Long existReference(String property, Object value);
}
