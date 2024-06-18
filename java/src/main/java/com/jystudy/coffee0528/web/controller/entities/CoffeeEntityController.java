package com.jystudy.coffee0528.web.controller.entities;

import java.io.Serializable;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Arrays;
import java.math.BigDecimal;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.*;

import com.jystudy.coffee0528.exception.HttpCodeException;
import com.jystudy.coffee0528.domain.entities.CoffeeEntity;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.CoffeeEntityService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate CoffeeEntity controller
*
* @author sys
*/
@RestController
public class CoffeeEntityController {
    @Resource
    private CoffeeEntityService service;

    /**
    * auto gen create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "c8356c57a5fd4cebbc0feb2eaba82f6c",rules = { @ValidationRule(value = "required",targetName = "body.coffeename",argvs = ""),@ValidationRule(value = "required",targetName = "body.description",argvs = ""),@ValidationRule(value = "required",targetName = "body.price",argvs = ""),@ValidationRule(value = "maxLength",targetName = "body.coffeeImage",argvs = "{\"max\":4000}"),@ValidationRule(value = "required",targetName = "body.coffeeImage",argvs = ""),@ValidationRule(value = "required",targetName = "body.coffeeCategory",argvs = ""),@ValidationRule(value = "required",targetName = "body.isDisplay",argvs = "")})})
    @PostMapping("/api/coffee")
    public ApiReturn<CoffeeEntity> create(@RequestBody CoffeeEntity body) {
        return ApiReturn.of(service.create(body));
    }

    /**
    * auto gen update method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "7da3087eaebf4b198a620b7dd3db63c1",rules = { @ValidationRule(value = "required",targetName = "filter.entity.coffeename",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.description",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.price",argvs = ""),@ValidationRule(value = "maxLength",targetName = "filter.entity.coffeeImage",argvs = "{\"max\":4000}"),@ValidationRule(value = "required",targetName = "filter.entity.coffeeImage",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.coffeeCategory",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.isDisplay",argvs = "")})})
    @PutMapping("/api/coffee")
    public ApiReturn<CoffeeEntity> update(@RequestBody EntityFilter filter) {
        if (filter == null || filter.getEntity() == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, "");
        }
        Map map = filter.getEntity();
        CoffeeEntity entity = JacksonUtils.fromJson(map, CoffeeEntity.class);
        List<String> updateFields = filter.getProperties();
        return ApiReturn.of(service.update(entity, updateFields));
    }

    /**
    * auto gen delete method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "15f748819caf427ba7560ac85b066205",rules = { })})
    @DeleteMapping("/api/coffee")
    public ApiReturn<Long> delete( @RequestParam(required = true) Long id ) { 
        return ApiReturn.of(service.delete( id )); 
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/coffee/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}