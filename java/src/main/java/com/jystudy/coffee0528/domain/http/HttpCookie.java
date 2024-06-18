package com.jystudy.coffee0528.domain.http;
/**
 * System built in generic class
 * HttpCookie
 *
 * @author sys
 */
public class HttpCookie {
    public String name;
    public String value;
    public String domain;
    public Boolean httpOnly;
    public Long maxAge;
    public Boolean secure;
    public String cookiePath;
    /**
     * Lax or Strict or None
     */
    public String sameSite;
}
