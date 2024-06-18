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
import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.CoffeeCategoryEntityService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate CoffeeCategoryEntity controller
*
* @author sys
*/
@RestController
public class CoffeeCategoryEntityController {
    @Resource
    private CoffeeCategoryEntityService service;

    /**
    * auto gen create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "80a194d461484e15b26f52ac3e9edb47",rules = { @ValidationRule(value = "maxLength",targetName = "body.cateGoryName",argvs = "{\"max\":30}"),@ValidationRule(value = "required",targetName = "body.cateGoryName",argvs = ""),@ValidationRule(value = "required",targetName = "body.isDisplay",argvs = "")})})
    @PostMapping("/api/coffee-category")
    public ApiReturn<CoffeeCategoryEntity> create(@RequestBody CoffeeCategoryEntity body) {
        return ApiReturn.of(service.create(body));
    }

    /**
    * auto gen update method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "091209a6f914425d9c83a57349c4d653",rules = { @ValidationRule(value = "maxLength",targetName = "filter.entity.cateGoryName",argvs = "{\"max\":30}"),@ValidationRule(value = "required",targetName = "filter.entity.cateGoryName",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.isDisplay",argvs = "")})})
    @PutMapping("/api/coffee-category")
    public ApiReturn<CoffeeCategoryEntity> update(@RequestBody EntityFilter filter) {
        if (filter == null || filter.getEntity() == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, "");
        }
        Map map = filter.getEntity();
        CoffeeCategoryEntity entity = JacksonUtils.fromJson(map, CoffeeCategoryEntity.class);
        List<String> updateFields = filter.getProperties();
        return ApiReturn.of(service.update(entity, updateFields));
    }

    /**
    * auto gen delete method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "3dab931f33634126ae9641cf57b8f561",rules = { })})
    @DeleteMapping("/api/coffee-category")
    public ApiReturn<Long> delete( @RequestParam(required = true) Long id ) { 
        return ApiReturn.of(service.delete( id )); 
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/coffee-category/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}