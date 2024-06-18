package com.jystudy.coffee0528.aspect;

import com.netease.lowcode.annotation.handler.LCAPAnnotationHandlerAdvise;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.lang.reflect.Method;

@Component
@Order
@Aspect
public class ControllerAspect {
    @Resource
    private AnnotationManager annotationManager;

    @Pointcut(value = "@annotation(com.jystudy.coffee0528.aspect.LogicAspect)")
    public void pointcut() {
    }

    @Around(value = "pointcut()")
    public Object doAround(ProceedingJoinPoint joinPoint) {
        Object[] args = joinPoint.getArgs();
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        Object result;
        try {
            annotationManager.processLogicHandlerHandle(method.getName(), args, null, LCAPAnnotationHandlerAdvise.BEFORE);
            result = joinPoint.proceed();
            annotationManager.processLogicHandlerHandle(method.getName(), args, result, LCAPAnnotationHandlerAdvise.AFTER);
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
        return result;
    }
}
