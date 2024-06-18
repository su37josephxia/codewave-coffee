package com.jystudy.coffee0528.domain.enumeration;

public interface BaseEnum <E extends  Enum<E>, T>{
    T getCode();

    String getDesc();
}