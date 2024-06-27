package com.jystudy.coffee0528.web.validation;

/**
 * @author sys
 */
public @interface ValidationRule {
    String value();
    String targetName();
    String targetFunction() default "";
    String argvs() default "";
    String errorMsg() default "";
}
