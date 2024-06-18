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
import com.jystudy.coffee0528.domain.entities.OrderEntityEntity;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.OrderEntityEntityService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate OrderEntityEntity controller
*
* @author sys
*/
@RestController
public class OrderEntityEntityController {
    @Resource
    private OrderEntityEntityService service;

    /**
    * auto gen create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "b620380ff7d04e45bd7d90cc33020111",rules = { @ValidationRule(value = "required",targetName = "body.consigneeName",argvs = ""),@ValidationRule(value = "required",targetName = "body.consigneePhone",argvs = ""),@ValidationRule(value = "required",targetName = "body.consigneeArea",argvs = ""),@ValidationRule(value = "required",targetName = "body.consigneeAddress",argvs = "")})})
    @PostMapping("/api/order-entity")
    public ApiReturn<OrderEntityEntity> create(@RequestBody OrderEntityEntity body) {
        return ApiReturn.of(service.create(body));
    }

    /**
    * auto gen update method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "648926b6e7f3424f8b19d0d68c0e9365",rules = { @ValidationRule(value = "required",targetName = "filter.entity.consigneeName",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.consigneePhone",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.consigneeArea",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.consigneeAddress",argvs = "")})})
    @PutMapping("/api/order-entity")
    public ApiReturn<OrderEntityEntity> update(@RequestBody EntityFilter filter) {
        if (filter == null || filter.getEntity() == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, "");
        }
        Map map = filter.getEntity();
        OrderEntityEntity entity = JacksonUtils.fromJson(map, OrderEntityEntity.class);
        List<String> updateFields = filter.getProperties();
        return ApiReturn.of(service.update(entity, updateFields));
    }

    /**
    * auto gen delete method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "fc71c84f2a7c4162b4dd68be99adabe7",rules = { })})
    @DeleteMapping("/api/order-entity")
    public ApiReturn<Long> delete( @RequestParam(required = true) Long id ) { 
        return ApiReturn.of(service.delete( id )); 
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/order-entity/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}